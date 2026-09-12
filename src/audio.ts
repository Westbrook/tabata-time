export type NoteName = 'G4' | 'D4' | 'C4' | 'C5';

export interface TimedNote {
  /** An absolute timestamp on the timer's monotonic clock. */
  atMs: number;
  note: NoteName;
  durationMs: number;
}

export interface AudioOutput {
  schedule(notes: readonly TimedNote[], nowMs: number): void;
  cancel(): void;
}

export const NOTE_FREQUENCIES: Record<NoteName, number> = {
  G4: 391.99543598174927,
  D4: 293.6647679174076,
  C4: 261.6255653005986,
  C5: 523.2511306011972,
};

interface BrowserAudioOptions {
  contextFactory?: () => AudioContext;
}

/** Schedules against the audio clock, independently of rendering or timer ticks. */
export class BrowserAudio implements AudioOutput {
  private context: AudioContext | undefined;
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
      this.context ??= this.contextFactory!();
      if (this.context.state === 'suspended') await this.context.resume();
      return this.context.state === 'running';
    } catch {
      this.failed = true;
      return false;
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
      gain.gain.setValueAtTime(0, start);
      gain.gain.linearRampToValueAtTime(0.22, start + Math.min(0.012, duration / 5));
      gain.gain.exponentialRampToValueAtTime(0.035, start + duration * 0.7);
      gain.gain.linearRampToValueAtTime(0, start + duration);
      oscillator.connect(gain);
      gain.connect(context.destination);
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
    void this.context?.close();
    this.context = undefined;
  }
}
