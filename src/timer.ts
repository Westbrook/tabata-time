import { Signal } from 'signal-polyfill';
import type { AudioOutput, NoteName, TimedNote } from './audio.ts';

export interface Segment {
  id: string;
  name: string;
  /** Duration in seconds. */
  duration: number;
  cue: 'work' | 'rest';
}

export type TimerStatus = 'idle' | 'running' | 'paused';

export const DEFAULT_SEGMENTS: readonly Segment[] = Object.freeze([
  Object.freeze({ id: 'work', name: 'Work', duration: 40, cue: 'work' as const }),
  Object.freeze({ id: 'rest', name: 'Rest', duration: 5, cue: 'rest' as const }),
]);

interface TimerOptions {
  segments?: readonly Segment[];
  audio?: AudioOutput;
  now?: () => number;
  /** Disable the background ticker for deterministic tests. */
  autoTick?: boolean;
}

const NOTE_DURATION_MS = 180;
const REST_BASS_GAIN_SCALE = 0.125;
const WORK_BASS_GAIN_SCALE = 0.03125;
const WORK_NOTES: readonly NoteName[] = ['G5', 'D5', 'D5', 'G5', 'D5'];

function validateSegments(segments: readonly Segment[]): readonly Segment[] {
  if (segments.length === 0) throw new Error('Add at least one interval.');
  const ids = new Set<string>();
  return Object.freeze(segments.map((segment) => {
    if (!segment.id || ids.has(segment.id)) throw new Error('Intervals need unique IDs.');
    if (!segment.name.trim()) throw new Error('Give each interval a name.');
    if (!Number.isFinite(segment.duration) || segment.duration < 1) {
      throw new Error('Interval durations must be at least one second.');
    }
    if (segment.cue !== 'work' && segment.cue !== 'rest') throw new Error('Choose an interval sound.');
    ids.add(segment.id);
    return Object.freeze({ ...segment, name: segment.name.trim() });
  }));
}

export class TabataTimer {
  readonly segments: Signal.State<readonly Segment[]>;
  readonly status = new Signal.State<TimerStatus>('idle');
  readonly index = new Signal.State(0);
  readonly round = new Signal.State(1);
  readonly remainingMs: Signal.State<number>;
  /** Actual running time across intervals, excluding pauses and skipped durations. */
  readonly elapsedMs = new Signal.State(0);
  readonly muted = new Signal.State(false);
  readonly activeSegment: Signal.Computed<Segment>;
  readonly nextSegment: Signal.Computed<Segment>;
  readonly totalDuration: Signal.Computed<number>;
  readonly elapsedProgress: Signal.Computed<number>;

  private readonly now: () => number;
  private readonly audio: AudioOutput | undefined;
  private readonly autoTick: boolean;
  private deadlineMs = 0;
  private runStartedMs = 0;
  private elapsedBeforeRunMs = 0;
  private interval: ReturnType<typeof setInterval> | undefined;
  private readonly scheduledNotes = new Map<string, number>();

  constructor(options: TimerOptions = {}) {
    const segments = validateSegments(options.segments ?? DEFAULT_SEGMENTS);
    this.segments = new Signal.State(segments);
    this.remainingMs = new Signal.State(segments[0]!.duration * 1000);
    this.now = options.now ?? (() => performance.now());
    this.audio = options.audio;
    this.autoTick = options.autoTick ?? true;
    this.activeSegment = new Signal.Computed(() => this.segments.get()[this.index.get()]!);
    this.nextSegment = new Signal.Computed(() => {
      const items = this.segments.get();
      return items[(this.index.get() + 1) % items.length]!;
    });
    this.totalDuration = new Signal.Computed(() =>
      this.segments.get().reduce((seconds, segment) => seconds + segment.duration, 0));
    this.elapsedProgress = new Signal.Computed(() =>
      Math.max(0, Math.min(1, 1 - this.remainingMs.get() / (this.activeSegment.get().duration * 1000))));
  }

  start(): void {
    if (this.status.get() === 'running') return;
    const now = this.now();
    this.runStartedMs = now;
    this.elapsedBeforeRunMs = this.elapsedMs.get();
    this.deadlineMs = now + this.remainingMs.get();
    this.status.set('running');
    this.scheduleAudio(now);
    if (this.autoTick) this.interval = setInterval(() => this.tick(), 25);
  }

  pause(): void {
    if (this.status.get() !== 'running') return;
    this.tick();
    this.status.set('paused');
    this.stopTicker();
    this.cancelAudio();
  }

  reset(): void {
    this.stopTicker();
    this.cancelAudio();
    this.status.set('idle');
    this.index.set(0);
    this.round.set(1);
    this.elapsedMs.set(0);
    this.remainingMs.set(this.segments.get()[0]!.duration * 1000);
  }

  skip(): void {
    const now = this.now();
    if (this.status.get() === 'running') this.updateClock(now);
    this.cancelAudio();
    const next = (this.index.get() + 1) % this.segments.get().length;
    this.index.set(next);
    if (next === 0) this.round.set(this.round.get() + 1);
    const durationMs = this.activeSegment.get().duration * 1000;
    this.remainingMs.set(durationMs);
    if (this.status.get() === 'running') {
      this.deadlineMs = now + durationMs;
      this.scheduleAudio(now);
    }
  }

  /** Remove an interval without restarting the interval currently in progress. */
  removeSegment(id: string): boolean {
    const segments = this.segments.get();
    const removedIndex = segments.findIndex((segment) => segment.id === id);
    if (removedIndex === -1 || segments.length === 1) return false;

    const now = this.now();
    const running = this.status.get() === 'running';
    if (running) this.updateClock(now);
    const activeIndex = this.index.get();
    const removingActive = removedIndex === activeIndex;
    const remaining = Object.freeze(segments.filter((segment) => segment.id !== id));
    this.cancelAudio();

    if (removingActive) {
      const wraps = activeIndex === segments.length - 1;
      this.index.set(wraps ? 0 : activeIndex);
      this.segments.set(remaining);
      if (wraps) this.round.set(this.round.get() + 1);
      const durationMs = this.activeSegment.get().duration * 1000;
      this.remainingMs.set(durationMs);
      if (running) this.deadlineMs = now + durationMs;
    } else {
      this.index.set(removedIndex < activeIndex ? activeIndex - 1 : activeIndex);
      this.segments.set(remaining);
    }

    if (running) this.scheduleAudio(now);
    return true;
  }

  /** Validate before changing anything; saving a routine returns it to ready. */
  replaceSegments(segments: readonly Segment[]): void {
    const validated = validateSegments(segments);
    this.stopTicker();
    this.cancelAudio();
    this.status.set('idle');
    this.index.set(0);
    this.segments.set(validated);
    this.round.set(1);
    this.elapsedMs.set(0);
    this.remainingMs.set(validated[0]!.duration * 1000);
  }

  setMuted(muted: boolean): void {
    if (this.muted.get() === muted) return;
    this.muted.set(muted);
    this.cancelAudio();
    if (!muted && this.status.get() === 'running') {
      const now = this.now();
      this.updateClock(now);
      this.scheduleAudio(now);
    }
  }

  tick(): void {
    if (this.status.get() !== 'running') return;
    const now = this.now();
    this.updateClock(now);
    this.scheduleAudio(now);
  }

  dispose(): void {
    if (this.status.get() === 'running') this.pause();
    this.stopTicker();
    this.cancelAudio();
  }

  private updateClock(now: number): void {
    this.elapsedMs.set(this.elapsedBeforeRunMs + Math.max(0, now - this.runStartedMs));
    const segments = this.segments.get();
    let index = this.index.get();
    let round = this.round.get();

    if (now >= this.deadlineMs) {
      // Jump entire cycles first, so a sleeping tab cannot require millions of ticks.
      const cycleMs = this.totalDuration.get() * 1000;
      const completeCycles = Math.floor((now - this.deadlineMs) / cycleMs);
      this.deadlineMs += completeCycles * cycleMs;
      round += completeCycles;
      while (now >= this.deadlineMs) {
        index = (index + 1) % segments.length;
        if (index === 0) round += 1;
        this.deadlineMs += segments[index]!.duration * 1000;
      }
    }

    this.index.set(index);
    this.round.set(round);
    this.remainingMs.set(Math.max(0, this.deadlineMs - now));
  }

  private scheduleAudio(now: number): void {
    if (!this.audio || this.muted.get()) return;
    for (const [key, end] of this.scheduledNotes) {
      if (end < now) this.scheduledNotes.delete(key);
    }

    const segments = this.segments.get();
    let index = this.index.get();
    let boundary = this.deadlineMs;
    const notes: TimedNote[] = [];
    // Keep two full rounds on the audio clock, even if the browser throttles rendering.
    for (let count = 0; count < segments.length * 2 + 1; count += 1) {
      const segment = segments[index]!;
      const start = boundary - segment.duration * 1000;
      const planned: TimedNote[] = segment.cue === 'work'
        ? WORK_NOTES.map((note, offset) => ({
            atMs: boundary + offset * NOTE_DURATION_MS,
            note,
            durationMs: NOTE_DURATION_MS,
          }))
        : [2, 1, 0].map((seconds) => ({
            atMs: boundary - seconds * 1000,
            note: seconds === 0 ? 'C6' as const : 'C4' as const,
            durationMs: seconds === 0 ? NOTE_DURATION_MS * 2 : NOTE_DURATION_MS,
          }));

      if (segment.cue === 'rest') {
        // Resume the held bass at the current time without replaying missed chimes.
        const bassStart = Math.max(now, start, boundary - 2_000);
        planned.push({
          atMs: bassStart,
          note: 'C3',
          durationMs: boundary + NOTE_DURATION_MS * 2 - bassStart,
          gainScale: REST_BASS_GAIN_SCALE,
          sustained: true,
        });
      } else {
        planned.push({
          atMs: boundary,
          note: 'G3',
          durationMs: NOTE_DURATION_MS * WORK_NOTES.length,
          gainScale: WORK_BASS_GAIN_SCALE,
          sustained: true,
        });
      }

      for (const [offset, note] of planned.entries()) {
        const key = `${boundary}:${index}:${offset}`;
        if (note.atMs >= now && note.atMs >= start && !this.scheduledNotes.has(key)) {
          notes.push(note);
          this.scheduledNotes.set(key, note.atMs + note.durationMs);
        }
      }
      index = (index + 1) % segments.length;
      boundary += segments[index]!.duration * 1000;
    }
    if (notes.length) this.audio.schedule(notes, now);
  }

  private cancelAudio(): void {
    this.audio?.cancel();
    this.scheduledNotes.clear();
  }

  private stopTicker(): void {
    if (this.interval !== undefined) clearInterval(this.interval);
    this.interval = undefined;
  }
}
