import { LitElement, html, nothing, svg } from 'lit';
import { repeat } from 'lit/directives/repeat.js';
import { Signal } from 'signal-polyfill';
import { effect } from 'signal-utils/subtle/microtask-effect';
import '@en-reve/elements/define/button.js';
import '@en-reve/elements/define/icon.js';
import '@en-reve/elements/define/number-field.js';
import '@en-reve/elements/define/text-field.js';
import '@en-reve/elements/define/select.js';
import '@en-reve/elements/define/dialog.js';
import '@en-reve/elements/define/slider.js';
import type { EnDialog } from '@en-reve/elements/dialog.js';
import { TabataTimer, DEFAULT_SEGMENTS, type Segment, type TimerStatus } from './timer.ts';
import { BrowserAudio } from './audio.ts';
import { appStyles } from './app-styles.ts';
import { icon } from './icons.ts';
import './global.css';

const STORAGE_KEY = 'tabata-time:v1';
const PROGRESS_REPORT_URL = 'http://localhost:4318';
type DraftSegment = Omit<Segment, 'duration'> & { duration: string };
type FieldEvent = CustomEvent<{ value?: string; proposed?: string }>;
type IntervalElement = HTMLElement & { scrollIntoViewIfNeeded?: (centerIfNeeded?: boolean) => void };

export function formatTime(seconds: number): string {
  const whole = Math.max(0, Math.ceil(seconds));
  return `${Math.floor(whole / 60).toString().padStart(2, '0')}:${(whole % 60).toString().padStart(2, '0')}`;
}

class TabataApp extends LitElement {
  static override styles = appStyles;
  private readonly audio = new BrowserAudio();
  private readonly volume = new Signal.State(100);
  readonly timer = this.createTimer();
  private readonly editing = new Signal.State(false);
  private readonly draft = new Signal.State<DraftSegment[]>([]);
  private readonly error = new Signal.State('');
  private readonly audioNotice = new Signal.State('');
  private stopEffect?: () => void;
  private starting = false;
  private wakeLock?: WakeLockSentinel;
  private rowObserver?: ResizeObserver;
  private lastRowSegments?: readonly Segment[];
  private lastRowIndex = -1;
  private lastRowRound = 0;
  private lastRowStatus?: TimerStatus;

  private createTimer(): TabataTimer {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? 'null');
      const timer = new TabataTimer({ audio: this.audio, segments: saved?.segments ?? DEFAULT_SEGMENTS });
      timer.setMuted(saved?.muted === true);
      if (typeof saved?.volume === 'number' && Number.isFinite(saved.volume)) {
        this.volume.set(Math.round(Math.max(0, Math.min(100, saved.volume))));
      }
      this.audio.setVolume(this.volume.get() / 100);
      return timer;
    } catch {
      return new TabataTimer({ audio: this.audio });
    }
  }

  override connectedCallback(): void {
    super.connectedCallback();
    this.stopEffect = effect(() => {
      this.timer.segments.get();
      this.timer.status.get();
      this.timer.index.get();
      this.timer.round.get();
      this.timer.remainingMs.get();
      this.timer.elapsedMs.get();
      this.timer.muted.get();
      this.volume.get();
      this.editing.get();
      this.draft.get();
      this.error.get();
      this.audioNotice.get();
      const status = this.timer.status.get();
      document.title = status === 'idle' ? 'Tabata Time' : `${formatTime(this.timer.remainingMs.get() / 1000)} · ${this.timer.activeSegment.get().name} — Tabata Time`;
      this.requestUpdate();
    });
    window.addEventListener('keydown', this.onKeyDown);
    document.addEventListener('visibilitychange', this.onVisibilityChange);
    if (this.hasUpdated) this.observeIntervalRow();
  }

  protected override firstUpdated(): void {
    this.observeIntervalRow();
  }

  protected override updated(): void {
    const segments = this.timer.segments.get();
    const index = this.timer.index.get();
    const round = this.timer.round.get();
    const status = this.timer.status.get();
    const starting = status === 'running' && this.lastRowStatus !== 'running';
    this.lastRowStatus = status;
    if (segments !== this.lastRowSegments || index !== this.lastRowIndex || round !== this.lastRowRound || starting) {
      this.lastRowSegments = segments;
      this.lastRowIndex = index;
      this.lastRowRound = round;
      this.updateIntervalRow();
    }
  }

  private observeIntervalRow(): void {
    const row = this.renderRoot.querySelector<HTMLElement>('.segments');
    if (!row) return;
    this.rowObserver?.disconnect();
    this.rowObserver = new ResizeObserver(() => this.updateIntervalRow());
    this.rowObserver.observe(row);
  }

  private updateIntervalRow(): void {
    const row = this.renderRoot.querySelector<HTMLElement>('.segments');
    if (!row) return;
    row.tabIndex = row.scrollWidth > row.clientWidth ? 0 : -1;
    const active = row.querySelector<IntervalElement>('[data-active]');
    if (!active) return;
    this.revealInterval(row, active);
  }

  private revealInterval(row: HTMLElement, interval: IntervalElement): void {
    const bounds = row.getBoundingClientRect();
    const item = interval.getBoundingClientRect();
    if (item.left >= bounds.left && item.right <= bounds.right) return;
    const viewport = document.documentElement;
    const rowIsOnscreen = bounds.top >= 0 && bounds.bottom <= viewport.clientHeight &&
      bounds.left >= 0 && bounds.right <= viewport.clientWidth;
    if (rowIsOnscreen && typeof interval.scrollIntoViewIfNeeded === 'function') {
      interval.scrollIntoViewIfNeeded(false);
      return;
    }
    // Unsupported browsers and offscreen rows use horizontal-only scrolling.
    // Native reveal can also move the document when the row is below the fold.
    if (item.left < bounds.left) row.scrollBy({ left: item.left - bounds.left - 16 });
    else row.scrollBy({ left: item.right - bounds.right + 16 });
  }

  private onIntervalRowKeyDown(event: KeyboardEvent): void {
    if (event.target !== event.currentTarget || event.altKey || event.ctrlKey || event.metaKey) return;
    const row = event.currentTarget as HTMLElement;
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    if (event.key === 'Home' || event.key === 'End') {
      row.scrollTo({ left: event.key === 'Home' ? 0 : row.scrollWidth });
    } else {
      row.scrollBy({ left: row.clientWidth * 0.75 * (event.key === 'ArrowLeft' ? -1 : 1) });
    }
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.stopEffect?.();
    this.rowObserver?.disconnect();
    this.timer.dispose();
    this.audio.dispose();
    void this.wakeLock?.release();
    window.removeEventListener('keydown', this.onKeyDown);
    document.removeEventListener('visibilitychange', this.onVisibilityChange);
  }

  private persist(): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ segments: this.timer.segments.get(), muted: this.timer.muted.get(), volume: this.volume.get() }));
    } catch { /* The timer remains usable when browser storage is unavailable. */ }
  }

  private async keepAwake(): Promise<void> {
    if (!('wakeLock' in navigator) || document.visibilityState !== 'visible' || this.timer.status.get() !== 'running') return;
    try {
      const lock = await navigator.wakeLock.request('screen');
      if (this.timer.status.get() !== 'running') await lock.release();
      else this.wakeLock = lock;
    } catch { /* Screen wake lock is an optional browser enhancement. */ }
  }

  private onVisibilityChange = (): void => {
    this.timer.tick();
    if (document.visibilityState === 'visible') void this.keepAwake();
  };

  private onKeyDown = (event: KeyboardEvent): void => {
    if (event.defaultPrevented || event.isComposing || event.repeat || event.altKey || event.ctrlKey || event.metaKey || this.editing.get()) return;
    const path = event.composedPath();
    if (path.some(node => node instanceof HTMLElement && (node.matches('input, select, textarea') || node.isContentEditable))) return;
    if (event.key.toLowerCase() === 'm') {
      event.preventDefault();
      void this.toggleSound();
      return;
    }
    if (event.code !== 'Space' || path.some(node => node instanceof HTMLElement && node.matches('button, a, en-button'))) return;
    event.preventDefault();
    void this.toggleTimer();
  };

  private async toggleTimer(): Promise<void> {
    if (this.starting) return;
    if (this.timer.status.get() === 'running') {
      this.timer.pause();
      void this.wakeLock?.release();
      return;
    }
    this.starting = true;
    try {
      if (!this.timer.muted.get() && !await this.audio.unlock()) {
        this.timer.setMuted(true);
        this.audioNotice.set('Sound is unavailable. The timer will keep going silently.');
      }
      this.timer.start();
      void this.keepAwake();
    } finally { this.starting = false; }
  }

  private reset = (): void => {
    this.timer.reset();
    void this.wakeLock?.release();
  };

  private async toggleSound(): Promise<void> {
    const wasMuted = this.timer.muted.get();
    if (wasMuted && !await this.audio.unlock()) {
      this.audioNotice.set('Sound is unavailable in this browser.');
      return;
    }
    this.audioNotice.set('');
    this.timer.setMuted(!wasMuted);
    this.persist();
  }

  private changeVolume(event: CustomEvent<{ proposed: number }>): void {
    const value = event.detail.proposed;
    if (!Number.isFinite(value)) return;
    this.volume.set(Math.round(Math.max(0, Math.min(100, value))));
    this.audio.setVolume(this.volume.get() / 100);
    this.persist();
  }

  private async openEditor(): Promise<void> {
    if (this.timer.status.get() === 'running') {
      this.timer.pause();
      void this.wakeLock?.release();
    }
    this.error.set('');
    this.draft.set(this.timer.segments.get().map(segment => ({ ...segment, duration: String(segment.duration) })));
    this.editing.set(true);
    await this.updateComplete;
    this.renderRoot.querySelector<EnDialog>('en-dialog')?.show();
  }

  private closeEditor(): void {
    this.renderRoot.querySelector<EnDialog>('en-dialog')?.hide();
    this.editing.set(false);
  }

  private changeDraft(id: string, key: 'name' | 'duration' | 'cue', event: FieldEvent): void {
    const value = event.detail.value ?? event.detail.proposed;
    if (value === undefined) return;
    this.draft.set(this.draft.get().map(segment => segment.id === id ? { ...segment, [key]: value } as DraftSegment : segment));
    this.error.set('');
  }

  private async addSegment(): Promise<void> {
    const id = crypto.randomUUID();
    this.draft.set([...this.draft.get(), { id, name: 'Work', duration: '40', cue: 'work' }]);
    await this.updateComplete;
    const fields = this.renderRoot.querySelectorAll<HTMLElement>('en-text-field');
    fields[fields.length - 1]?.focus();
  }

  private async deleteSegment(id: string, event: MouseEvent): Promise<void> {
    const index = this.timer.segments.get().findIndex(segment => segment.id === id);
    if (index < 2) return;
    const restoreFocus = this.shadowRoot?.activeElement === event.currentTarget;
    if (!this.timer.removeSegment(id)) return;
    this.persist();
    this.requestUpdate();
    await this.updateComplete;
    if (restoreFocus) {
      const buttons = this.renderRoot.querySelectorAll<HTMLElement>('.segment-delete');
      const target = buttons[Math.min(index - 2, buttons.length - 1)] ?? this.renderRoot.querySelector<HTMLElement>('.edit');
      target?.focus({ preventScroll: true });
      const row = this.renderRoot.querySelector<HTMLElement>('.segments');
      const interval = target?.closest<IntervalElement>('.segment');
      if (row && interval) this.revealInterval(row, interval);
    }
  }

  private saveSegments(): void {
    const segments = this.draft.get().map(segment => ({ ...segment, name: segment.name.trim(), duration: Number(segment.duration) }));
    if (segments.some(segment => !segment.name || segment.name.length > 40)) {
      this.error.set('Give each interval a name, up to 40 characters.');
      return;
    }
    if (segments.some(segment => !Number.isInteger(segment.duration) || segment.duration < 1 || segment.duration > 3600)) {
      this.error.set('Use a whole number from 1 to 3,600 seconds for each interval.');
      return;
    }
    this.timer.replaceSegments(segments);
    this.persist();
    this.closeEditor();
  }

  protected override render() {
    const timer = this.timer;
    const status = timer.status.get();
    const active = timer.activeSegment.get();
    const next = timer.nextSegment.get();
    const segments = timer.segments.get();
    const completed = timer.round.get() - 1;
    const time = formatTime(timer.remainingMs.get() / 1000);
    const muted = timer.muted.get();
    const label = status === 'running' ? 'Pause' : status === 'paused' ? 'Resume' : 'Start timer';
    return html`
      <div class="page ${status} ${active.cue === 'rest' ? 'resting' : ''}">
        <header>
          <div class="brand">
            <svg class="brand-mark" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" aria-hidden="true"><circle cx="16" cy="18" r="10.5"/><path d="M16 18v-6m-3-9h6m-3 0v4m8 2 2-2"/></svg>
            <span>tabata time</span>
          </div>
          <div class="sound-controls">
            ${!muted ? html`<en-slider class="volume" label="Volume" min="0" max="100" step="1" show-value .value=${this.volume.get()} .editable=${false} @en-change=${this.changeVolume}></en-slider>` : nothing}
            <en-button class="sound" variant="ghost" @click=${this.toggleSound}>
            ${icon(muted ? 'mute' : 'sound', 'prefix')}
            <span slot="label">Sound ${muted ? 'off' : 'on'}</span>
            <kbd class="shortcut" slot="suffix" aria-hidden="true">m</kbd>
            </en-button>
          </div>
        </header>
        <main>
          <div class="dial">
            <svg class="dial-svg" viewBox="0 0 360 360" aria-hidden="true">
              <circle class="dial-track" cx="180" cy="180" r="173" fill="none" stroke-width="4"/>
              <circle class="dial-progress" cx="180" cy="180" r="173" fill="none" stroke-width="4" stroke-linecap="round" pathLength="100" stroke-dasharray="100" stroke-dashoffset=${timer.elapsedProgress.get() * 100}/>
              <g class="dial-ticks">${Array.from({ length: 60 }, (_, i) => svg`<line x1="180" y1="23" x2="180" y2=${i % 5 === 0 ? 31 : 27} transform="rotate(${i * 6} 180 180)"/>`)}</g>
            </svg>
            <div class="dial-content">
              <h1 class="segment-label"><span class="segment-dot" aria-hidden="true"></span><span>${active.name}</span></h1>
              <div class="digits ${time.length > 5 ? 'long' : ''}" role="timer" aria-label=${`${active.name}, ${Math.ceil(timer.remainingMs.get() / 1000)} seconds remaining`} aria-live="off">${time}</div>
              <p class="dial-caption">${status === 'idle' ? 'Ready' : 'Paused'}</p>
            </div>
          </div>
          <div class="next-slot">${segments.length > 2 ? html`<p class="next">Up next ${icon('arrow')} <strong>${next.name}</strong><span>· ${next.duration}s</span></p>` : nothing}</div>
          <div class="actions">
            ${status !== 'idle' ? html`<en-button class="aux" variant="ghost" icon-only @click=${this.reset}>${icon('reset', 'prefix')}<span slot="label">Reset timer</span></en-button>` : nothing}
            <en-button class="primary" @click=${this.toggleTimer}>${icon(status === 'running' ? 'pause' : 'play', 'prefix')}<span slot="label">${label}</span><kbd class="shortcut" slot="suffix" aria-hidden="true">space</kbd></en-button>
            ${status !== 'idle' ? html`<en-button class="aux" variant="ghost" icon-only @click=${() => timer.skip()}>${icon('skip', 'prefix')}<span slot="label">Next interval</span></en-button>` : nothing}
          </div>
          <section class="routine" aria-label="Your intervals">
            <div class="routine-heading"><h2>Your intervals</h2><en-button class="edit" variant="ghost" @click=${this.openEditor}>${icon('edit', 'prefix')}<span slot="label">Edit intervals</span></en-button></div>
            <ol class="segments" aria-label="Intervals" @keydown=${this.onIntervalRowKeyDown}>${repeat(segments, segment => segment.id, (segment, i) => html`
              <li class="segment ${segment.cue === 'rest' ? 'rest' : ''}" ?data-active=${i === timer.index.get()} aria-current=${i === timer.index.get() ? 'step' : nothing}>
                <span class="segment-title">
                  <span class="segment-name" title=${segment.name}>${segment.name}</span>
                  ${i >= 2 ? html`<en-button class="segment-delete" variant="ghost" icon-only title=${`Delete ${segment.name}`} @click=${(event: MouseEvent) => this.deleteSegment(segment.id, event)}>
                    <en-icon slot="prefix" name="close"></en-icon><span slot="label">Delete interval ${i + 1}: ${segment.name}</span>
                  </en-button>` : nothing}
                </span>
                <span class="segment-duration">${segment.duration}s</span>
              </li>
            `)}</ol>
            <p class="repeat-note">${icon('repeat')}<span>${formatTime(timer.totalDuration.get())} per cycle</span><span aria-hidden="true">·</span><span class="completed-cycles" role="status" aria-live="polite" aria-atomic="true">${completed} ${completed === 1 ? 'cycle' : 'cycles'} complete</span><span aria-hidden="true">·</span><span class="total-time">${formatTime(Math.floor(timer.elapsedMs.get() / 1000))} total time</span></p>
          </section>
          ${this.audioNotice.get() ? html`<p class="audio-notice" role="status">${this.audioNotice.get()}</p>` : nothing}
          <p class="sr-only" role="status" aria-live="polite">${status === 'idle' ? 'Ready' : status === 'paused' ? 'Paused' : active.name}.</p>
        </main>
      </div>
      ${this.renderEditor()}
      ${new URL(location.href).searchParams.has('progress-report') ? html`<a class="report-link" href=${PROGRESS_REPORT_URL}>Progress Report ↗</a>` : nothing}
    `;
  }

  private renderEditor() {
    return html`<en-dialog label="Your intervals" closedby="closerequest" @en-change=${(event: CustomEvent<{proposed: boolean}>) => {
      if (event.target === event.currentTarget) this.editing.set(event.detail.proposed);
    }}>
      <p class="editor-intro">Each cycle plays these intervals in order, then repeats.</p>
      <div class="editor-rows">${repeat(this.draft.get(), segment => segment.id, (segment, i) => html`
        <div class="editor-row">
          <en-text-field label=${`Interval ${i + 1}`} .value=${segment.name} maxlength="40" required @en-input=${(e: FieldEvent) => this.changeDraft(segment.id, 'name', e)}></en-text-field>
          <en-number-field label="Seconds" min="1" max="3600" step="1" .value=${segment.duration} required
            decrement-label=${`Shorten interval ${i + 1}`} increment-label=${`Lengthen interval ${i + 1}`}
            @en-input=${(e: FieldEvent) => this.changeDraft(segment.id, 'duration', e)}
            @en-change=${(e: FieldEvent) => this.changeDraft(segment.id, 'duration', e)}></en-number-field>
          <en-select label="Chime" .value=${segment.cue} .items=${[{ value: 'work', label: 'Work' }, { value: 'rest', label: 'Rest' }]} @en-change=${(e: FieldEvent) => this.changeDraft(segment.id, 'cue', e)}></en-select>
          <en-button class="remove" variant="ghost" icon-only ?disabled=${this.draft.get().length <= 1} @click=${() => this.draft.set(this.draft.get().filter(item => item.id !== segment.id))}>
            <en-icon slot="prefix" name="close"></en-icon><span slot="label">Remove interval ${i + 1}</span>
          </en-button>
        </div>
      `)}</div>
      <en-button class="add" variant="ghost" @click=${this.addSegment}><en-icon slot="prefix" name="plus"></en-icon><span slot="label">Add interval</span></en-button>
      ${this.error.get() ? html`<p class="error" role="alert">${this.error.get()}</p>` : nothing}
      <p class="cue-notes">Work: five notes at the end. Rest: a countdown at 2, 1, and 0 seconds.<br>Saving starts a fresh cycle. Your intervals are saved on this device.</p>
      <div class="editor-footer" slot="footer"><en-button variant="ghost" @click=${this.closeEditor}>Cancel</en-button><en-button @click=${this.saveSegments}>Save intervals</en-button></div>
    </en-dialog>`;
  }
}

customElements.define('tabata-app', TabataApp);
