import assert from 'node:assert/strict';
import test from 'node:test';
import { BrowserAudio, NOTE_FREQUENCIES } from '../src/audio.ts';

function fakeContext(initialState = 'running') {
  const voices: { frequency: number; start: number; stops: (number | undefined)[]; disconnected: boolean }[] = [];
  const gains: { values: number[]; disconnected: boolean; cancelled: boolean }[] = [];
  const context = {
    state: initialState,
    currentTime: 12.5,
    destination: {},
    resume: async () => { context.state = 'running'; },
    close: async () => { context.state = 'closed'; },
    createOscillator() {
      const voice = { frequency: 0, start: 0, stops: [] as (number | undefined)[], disconnected: false };
      voices.push(voice);
      return {
        type: '',
        frequency: { setValueAtTime(value: number) { voice.frequency = value; } },
        connect() {},
        disconnect() { voice.disconnected = true; },
        start(time: number) { voice.start = time; },
        stop(time?: number) { voice.stops.push(time); },
        onended: null,
      };
    },
    createGain() {
      const gain = { values: [] as number[], disconnected: false, cancelled: false };
      gains.push(gain);
      return {
        gain: {
          setValueAtTime(value: number) { gain.values.push(value); },
          linearRampToValueAtTime(value: number) { gain.values.push(value); },
          exponentialRampToValueAtTime(value: number) { gain.values.push(value); },
          cancelScheduledValues() { gain.cancelled = true; },
        },
        connect() {},
        disconnect() { gain.disconnected = true; },
      };
    },
  };
  return { context, voices, gains };
}

test('unlocks a suspended audio context and translates deadlines onto its audio clock', async () => {
  const { context, voices } = fakeContext('suspended');
  const audio = new BrowserAudio({ contextFactory: () => context as unknown as AudioContext });
  assert.equal(await audio.unlock(), true);
  audio.schedule([
    { atMs: 2_000, note: 'G4', durationMs: 180 },
    { atMs: 2_180, note: 'D4', durationMs: 180 },
    { atMs: 3_000, note: 'C4', durationMs: 180 },
    { atMs: 4_000, note: 'C5', durationMs: 180 },
  ], 1_000);
  assert.deepEqual(voices.map((voice) => voice.start), [13.5, 13.68, 14.5, 15.5]);
  assert.deepEqual(voices.map((voice) => voice.frequency), [
    NOTE_FREQUENCIES.G4, NOTE_FREQUENCIES.D4, NOTE_FREQUENCIES.C4, NOTE_FREQUENCIES.C5,
  ]);
  assert.ok(voices.every((voice) => Math.abs(voice.stops[0]! - voice.start - 0.18) < 1e-10));
});

test('cancel stops and disconnects all current and future notes, silencing envelopes', async () => {
  const { context, voices, gains } = fakeContext();
  const audio = new BrowserAudio({ contextFactory: () => context as unknown as AudioContext });
  await audio.unlock();
  audio.schedule([
    { atMs: 1_000, note: 'G4', durationMs: 180 },
    { atMs: 40_000, note: 'D4', durationMs: 180 },
  ], 1_000);
  audio.cancel();
  assert.ok(voices.every((voice) => voice.stops.length === 2 && voice.stops[1] === undefined));
  assert.ok(voices.every((voice) => voice.disconnected));
  assert.ok(gains.every((gain) => gain.cancelled && gain.disconnected && gain.values.at(-1) === 0));
  audio.cancel();
  assert.ok(voices.every((voice) => voice.stops.length === 2));
});

test('ignores historical notes and remains usable when audio cannot be initialized', async () => {
  const { context, voices } = fakeContext();
  const audio = new BrowserAudio({ contextFactory: () => context as unknown as AudioContext });
  await audio.unlock();
  audio.schedule([
    { atMs: 999, note: 'C4', durationMs: 180 },
    { atMs: 1_000, note: 'C5', durationMs: 180 },
  ], 1_000);
  assert.equal(voices.length, 1);
  assert.equal(voices[0]!.frequency, NOTE_FREQUENCIES.C5);
  const unavailable = new BrowserAudio({ contextFactory: () => { throw new Error('Audio unavailable'); } });
  assert.equal(await unavailable.unlock(), false);
  assert.equal(unavailable.available, false);
  assert.doesNotThrow(() => unavailable.schedule([{ atMs: 0, note: 'C4', durationMs: 180 }], 0));
  unavailable.cancel();
});
