import assert from 'node:assert/strict';
import test from 'node:test';
import { BrowserAudio, NOTE_FREQUENCIES } from '../src/audio.ts';

function fakeContext(initialState = 'running') {
  const voices: { frequency: number; start: number; stops: (number | undefined)[]; disconnected: boolean }[] = [];
  const gains: { values: number[]; events: { kind: string; value: number; time: number }[]; disconnected: boolean; cancelled: boolean; connectedTo?: unknown }[] = [];
  const gainNodes: unknown[] = [];
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
      const gain = { values: [] as number[], events: [] as { kind: string; value: number; time: number }[], disconnected: false, cancelled: false, connectedTo: undefined as unknown };
      gains.push(gain);
      const node = {
        gain: {
          setValueAtTime(value: number, time: number) { gain.values.push(value); gain.events.push({ kind: 'set', value, time }); },
          setTargetAtTime(value: number) { gain.values.push(value); },
          linearRampToValueAtTime(value: number, time: number) { gain.values.push(value); gain.events.push({ kind: 'linear', value, time }); },
          exponentialRampToValueAtTime(value: number, time: number) { gain.values.push(value); gain.events.push({ kind: 'exponential', value, time }); },
          cancelScheduledValues() { gain.cancelled = true; },
        },
        connect(destination: unknown) { gain.connectedTo = destination; },
        disconnect() { gain.disconnected = true; },
      };
      gainNodes.push(node);
      return node;
    },
  };
  return { context, voices, gains, gainNodes };
}

test('unlocks a suspended audio context and translates deadlines onto its audio clock', async () => {
  const { context, voices } = fakeContext('suspended');
  const audio = new BrowserAudio({ contextFactory: () => context as unknown as AudioContext });
  assert.equal(await audio.unlock(), true);
  audio.schedule([
    { atMs: 2_000, note: 'G5', durationMs: 180 },
    { atMs: 2_180, note: 'D5', durationMs: 180 },
    { atMs: 3_000, note: 'C4', durationMs: 180 },
    { atMs: 4_000, note: 'C6', durationMs: 180 },
  ], 1_000);
  assert.deepEqual(voices.map((voice) => voice.start), [13.5, 13.68, 14.5, 15.5]);
  assert.deepEqual(voices.map((voice) => voice.frequency), [
    NOTE_FREQUENCIES.G5, NOTE_FREQUENCIES.D5, NOTE_FREQUENCIES.C4, NOTE_FREQUENCIES.C6,
  ]);
  assert.ok(voices.every((voice) => Math.abs(voice.stops[0]! - voice.start - 0.18) < 1e-10));
});

test('cancel stops and disconnects all current and future notes, silencing envelopes', async () => {
  const { context, voices, gains } = fakeContext();
  const audio = new BrowserAudio({ contextFactory: () => context as unknown as AudioContext });
  await audio.unlock();
  audio.schedule([
    { atMs: 1_000, note: 'G5', durationMs: 180 },
    { atMs: 40_000, note: 'D5', durationMs: 180 },
  ], 1_000);
  audio.cancel();
  assert.ok(voices.every((voice) => voice.stops.length === 2 && voice.stops[1] === undefined));
  assert.ok(voices.every((voice) => voice.disconnected));
  assert.ok(gains.slice(1).every((gain) => gain.cancelled && gain.disconnected && gain.values.at(-1) === 0));
  assert.equal(gains[0]!.disconnected, false);
  audio.cancel();
  assert.ok(voices.every((voice) => voice.stops.length === 2));
});

test('volume controls a shared output for existing and future chimes, including zero', async () => {
  const { context, voices, gains, gainNodes } = fakeContext();
  const audio = new BrowserAudio({ contextFactory: () => context as unknown as AudioContext });
  audio.setVolume(0.4);
  assert.equal(gains.length, 0);
  await audio.unlock();
  assert.deepEqual(gains[0]!.values, [0.4]);
  assert.equal(gains[0]!.connectedTo, context.destination);
  audio.schedule([
    { atMs: 0, note: 'G5', durationMs: 180 },
    { atMs: 40_000, note: 'D5', durationMs: 180 },
  ], 0);
  assert.ok(gains.slice(1).every(gain => gain.connectedTo === gainNodes[0]));
  const starts = voices.map(voice => voice.start);
  audio.setVolume(0);
  audio.setVolume(0.7);
  audio.setVolume(2);
  audio.setVolume(-1);
  audio.setVolume(NaN);
  assert.deepEqual(gains[0]!.values, [0.4, 0, 0.7, 1, 0]);
  assert.deepEqual(voices.map(voice => voice.start), starts);
  assert.ok(voices.every(voice => voice.stops.length === 1));
  audio.dispose();
  assert.equal(gains[0]!.disconnected, true);
});

test('ignores historical notes and remains usable when audio cannot be initialized', async () => {
  const { context, voices } = fakeContext();
  const audio = new BrowserAudio({ contextFactory: () => context as unknown as AudioContext });
  await audio.unlock();
  audio.schedule([
    { atMs: 999, note: 'C4', durationMs: 180 },
    { atMs: 1_000, note: 'C6', durationMs: 180 },
  ], 1_000);
  assert.equal(voices.length, 1);
  assert.equal(voices[0]!.frequency, NOTE_FREQUENCIES.C6);
  const unavailable = new BrowserAudio({ contextFactory: () => { throw new Error('Audio unavailable'); } });
  assert.equal(await unavailable.unlock(), false);
  assert.equal(unavailable.available, false);
  assert.doesNotThrow(() => unavailable.schedule([{ atMs: 0, note: 'C4', durationMs: 180 }], 0));
  unavailable.cancel();
});

test('defaults to 70 and holds C3 at one-eighth chime gain through the longer C6 release', async () => {
  const { context, voices, gains } = fakeContext();
  const audio = new BrowserAudio({ contextFactory: () => context as unknown as AudioContext });
  await audio.unlock();
  assert.deepEqual(gains[0]!.values, [0.7]);
  audio.schedule([
    { atMs: 0, note: 'C4', durationMs: 180 },
    { atMs: 1_000, note: 'C4', durationMs: 180 },
    { atMs: 2_000, note: 'C6', durationMs: 360 },
    { atMs: 0, note: 'C3', durationMs: 2_360, gainScale: 0.125, sustained: true },
  ], 0);
  assert.ok(Math.abs(voices[3]!.frequency - 130.8127827) < 0.000001);
  assert.equal(voices[3]!.start, voices[0]!.start);
  assert.equal(voices[3]!.stops[0], voices[2]!.stops[0]);
  const bass = gains[4]!;
  assert.deepEqual(bass.events.map(({ kind, value }) => ({ kind, value })), [
    { kind: 'set', value: 0 },
    { kind: 'linear', value: 0.0275 },
    { kind: 'set', value: 0.0275 },
    { kind: 'linear', value: 0 },
  ]);
  assert.equal(bass.values[1], gains[1]!.values[1]! / 8);
  assert.ok(Math.abs(bass.events[2]!.time - (voices[3]!.stops[0]! - 0.025)) < 1e-10);
  audio.setVolume(0);
  assert.equal(gains[0]!.values.at(-1), 0);
  audio.cancel();
  assert.ok(bass.cancelled && bass.disconnected);
  assert.equal(bass.values.at(-1), 0);
  assert.equal(voices[3]!.stops.length, 2);
});

test('holds G3 under the full work melody at one-quarter the gain of C3', async () => {
  const { context, voices, gains } = fakeContext();
  const audio = new BrowserAudio({ contextFactory: () => context as unknown as AudioContext });
  await audio.unlock();
  audio.schedule([
    { atMs: 0, note: 'G3', durationMs: 900, gainScale: 0.03125, sustained: true },
    { atMs: 0, note: 'C3', durationMs: 2_360, gainScale: 0.125, sustained: true },
  ], 0);
  assert.ok(Math.abs(voices[0]!.frequency - 195.997718) < 0.000001);
  assert.ok(Math.abs(voices[0]!.stops[0]! - voices[0]!.start - 0.9) < 1e-10);
  assert.deepEqual(gains[1]!.values, [0, 0.006875, 0.006875, 0]);
  assert.deepEqual(gains[1]!.values, gains[2]!.values.map(value => value / 4));
  assert.ok(Math.abs(gains[1]!.events[2]!.time - (voices[0]!.stops[0]! - 0.025)) < 1e-10);
  audio.cancel();
  assert.ok(gains.slice(1).every(gain => gain.cancelled && gain.disconnected));
});
