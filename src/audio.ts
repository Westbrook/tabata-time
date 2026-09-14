export type NoteName = 'G3' | 'G5' | 'D5' | 'C3' | 'C4' | 'C6';

export const DEFAULT_VOLUME = 70;

export interface TimedNote {
  /** An absolute timestamp on the timer's monotonic clock. */
  atMs: number;
  note: NoteName;
  durationMs: number;
  /** Relative to the normal chime's peak gain. */
  gainScale?: number;
  /** Hold the peak until a short release instead of decaying like a chime. */
  sustained?: boolean;
}

export interface AudioOutput {
  schedule(notes: readonly TimedNote[], nowMs: number): void;
  cancel(): void;
}

export const NOTE_FREQUENCIES: Record<NoteName, number> = {
  G3: 195.99771799087463,
  G5: 783.9908719634985,
  D5: 587.3295358348151,
  C3: 130.8127826502993,
  C4: 261.6255653005986,
  C6: 1046.5022612023945,
};

interface BrowserAudioOptions {
  contextFactory?: () => AudioContext;
}

/** Schedules against the audio clock, independently of rendering or timer ticks. */
export class BrowserAudio implements AudioOutput {
  private context: AudioContext | undefined;
  private masterGain: GainNode | undefined;
  private volume = DEFAULT_VOLUME / 100;
  private readonly contextFactory: (() => AudioContext) | undefined;
  private readonly voices = new Map<OscillatorNode, GainNode>();
  private failed = false;

  constructor(options: BrowserAudioOptions = {}) {
    const AudioContextClass = globalThis.AudioContext ??
      (globalThis as typeof globalThis & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    this.contextFactory = options.contextFactory ??
      (AudioContextClass ? () => new AudioContextClass() : undefined);
  }

  get available(): boolean {
    return Boolean(this.contextFactory) && !this.failed;
  }

  get unlocked(): boolean {
    return this.context?.state === 'running';
  }

  /** Call directly from the Start or sound button's user gesture. */
  async unlock(): Promise<boolean> {
    if (!this.available) return false;
    try {
      if (!this.context) {
        this.context = this.contextFactory!();
        this.masterGain = this.context.createGain();
        this.masterGain.gain.setValueAtTime(this.volume, this.context.currentTime);
        this.masterGain.connect(this.context.destination);
      }
      if (this.context.state === 'suspended') await this.context.resume();
      return this.context.state === 'running';
    } catch {
      this.failed = true;
      return false;
    }
  }

  setVolume(volume: number): void {
    if (!Number.isFinite(volume)) return;
    this.volume = Math.max(0, Math.min(1, volume));
    if (this.context && this.masterGain) {
      this.masterGain.gain.setTargetAtTime(this.volume, this.context.currentTime, 0.015);
    }
  }

  schedule(notes: readonly TimedNote[], nowMs: number): void {
    const context = this.context;
    if (!context || context.state !== 'running') return;
    const audioNow = context.currentTime;

    for (const note of notes) {
      // A delayed page update must never replay an old alarm.
      if (note.atMs < nowMs || note.durationMs <= 0) continue;
      const start = audioNow + (note.atMs - nowMs) / 1000;
      const duration = note.durationMs / 1000;
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(NOTE_FREQUENCIES[note.note], start);
      const gainScale = note.gainScale ?? 1;
      const peak = 0.22 * gainScale;
      gain.gain.setValueAtTime(0, start);
      gain.gain.linearRampToValueAtTime(peak, start + Math.min(0.012, duration / 5));
      if (note.sustained) {
        gain.gain.setValueAtTime(peak, start + duration - Math.min(0.025, duration / 5));
      } else {
        gain.gain.exponentialRampToValueAtTime(0.035 * gainScale, start + duration * 0.7);
      }
      gain.gain.linearRampToValueAtTime(0, start + duration);
      oscillator.connect(gain);
      gain.connect(this.masterGain!);
      this.voices.set(oscillator, gain);
      oscillator.onended = () => {
        oscillator.disconnect();
        gain.disconnect();
        this.voices.delete(oscillator);
      };
      oscillator.start(start);
      oscillator.stop(start + duration);
    }
  }

  cancel(): void {
    for (const [oscillator, gain] of this.voices) {
      gain.gain.cancelScheduledValues(0);
      gain.gain.setValueAtTime(0, this.context?.currentTime ?? 0);
      try { oscillator.stop(); } catch { /* A finished voice is already silent. */ }
      oscillator.disconnect();
      gain.disconnect();
    }
    this.voices.clear();
  }

  dispose(): void {
    this.cancel();
    this.masterGain?.disconnect();
    this.masterGain = undefined;
    void this.context?.close();
    this.context = undefined;
  }
}
