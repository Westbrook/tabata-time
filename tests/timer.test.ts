import assert from 'node:assert/strict';
import test from 'node:test';
import { TabataTimer, DEFAULT_SEGMENTS, type Segment } from '../src/timer.ts';
import type { AudioOutput, TimedNote } from '../src/audio.ts';

class RecordedAudio implements AudioOutput {
  calls: { notes: TimedNote[]; nowMs: number }[] = [];
  cancellations = 0;
  schedule(notes: readonly TimedNote[], nowMs: number): void {
    this.calls.push({ notes: [...notes], nowMs });
  }
  cancel(): void { this.cancellations += 1; }
  get notes(): TimedNote[] { return this.calls.flatMap((call) => call.notes); }
}

function setup(segments?: readonly Segment[]) {
  let now = 0;
  const audio = new RecordedAudio();
  const timer = new TabataTimer({ segments, audio, now: () => now, autoTick: false });
  return { timer, audio, at: (time: number) => { now = time; } };
}

test('starts with the requested two intervals and a ready first round', () => {
  const { timer } = setup();
  assert.deepEqual(timer.segments.get(), DEFAULT_SEGMENTS);
  assert.equal(timer.status.get(), 'idle');
  assert.equal(timer.remainingMs.get(), 40_000);
  assert.equal(timer.round.get(), 1);
  assert.equal(timer.nextSegment.get().id, 'rest');
  assert.equal(timer.totalDuration.get(), 45);
});

test('uses deadlines and catches up to the correct interval, remainder, and round', () => {
  const { timer, at } = setup();
  at(100.25);
  timer.start();
  at(40_100.25);
  timer.tick();
  assert.equal(timer.activeSegment.get().id, 'rest');
  assert.equal(timer.remainingMs.get(), 5_000);
  at(45_100.25);
  timer.tick();
  assert.equal(timer.activeSegment.get().id, 'work');
  assert.equal(timer.round.get(), 2);
  at(45_100.25 + 45_000 * 1_000_000 + 43_123.5);
  timer.tick();
  assert.equal(timer.activeSegment.get().id, 'rest');
  assert.equal(timer.round.get(), 1_000_002);
  assert.equal(timer.remainingMs.get(), 1_876.5);
});

test('pause preserves the precise remainder and resume starts a new deadline', () => {
  const { timer, audio, at } = setup();
  timer.start();
  at(12_345.5);
  timer.pause();
  assert.equal(timer.remainingMs.get(), 27_654.5);
  assert.equal(timer.status.get(), 'paused');
  assert.equal(audio.cancellations, 1);
  at(80_000);
  timer.tick();
  assert.equal(timer.remainingMs.get(), 27_654.5);
  timer.start();
  at(107_654.5);
  timer.tick();
  assert.equal(timer.activeSegment.get().id, 'rest');
  assert.equal(timer.remainingMs.get(), 5_000);
});

test('skip advances from the live interval after a delayed tick and preserves running state', () => {
  const { timer, audio, at } = setup();
  timer.start();
  at(41_000);
  timer.skip();
  assert.equal(timer.activeSegment.get().id, 'work');
  assert.equal(timer.round.get(), 2);
  assert.equal(timer.remainingMs.get(), 40_000);
  assert.equal(timer.status.get(), 'running');
  assert.equal(audio.cancellations, 1);
  at(42_000);
  timer.pause();
  timer.skip();
  assert.equal(timer.activeSegment.get().id, 'rest');
  assert.equal(timer.status.get(), 'paused');
  assert.equal(timer.remainingMs.get(), 5_000);
});

test('saving a changed routine resets safely; invalid edits leave the running timer intact', () => {
  const { timer, at } = setup();
  timer.start();
  at(46_000);
  timer.tick();
  assert.throws(() => timer.replaceSegments([]), /at least one/);
  assert.throws(() => timer.replaceSegments([{ ...DEFAULT_SEGMENTS[0]!, duration: 0 }]), /one second/);
  assert.equal(timer.status.get(), 'running');
  assert.equal(timer.round.get(), 2);
  timer.replaceSegments([
    { id: 'warmup', name: ' Warm up ', duration: 8, cue: 'work' },
    { id: 'breathe', name: 'Breathe', duration: 3, cue: 'rest' },
    { id: 'sprint', name: 'Sprint', duration: 12, cue: 'work' },
  ]);
  assert.equal(timer.status.get(), 'idle');
  assert.equal(timer.activeSegment.get().name, 'Warm up');
  assert.equal(timer.index.get(), 0);
  assert.equal(timer.round.get(), 1);
  assert.equal(timer.remainingMs.get(), 8_000);
  assert.equal(timer.totalDuration.get(), 23);
  timer.start();
  at(69_000);
  timer.tick();
  assert.equal(timer.index.get(), 0);
  assert.equal(timer.round.get(), 2);
});

test('reset returns to ready and clears both progress and scheduled audio', () => {
  const { timer, audio, at } = setup();
  timer.start();
  at(20_000);
  timer.tick();
  assert.equal(timer.elapsedProgress.get(), 0.5);
  timer.reset();
  assert.equal(timer.status.get(), 'idle');
  assert.equal(timer.remainingMs.get(), 40_000);
  assert.equal(timer.elapsedProgress.get(), 0);
  assert.equal(audio.cancellations, 1);
});

test('pre-schedules the exact work melody and rest countdown at the requested boundaries', () => {
  const { timer, audio, at } = setup();
  timer.start();
  const firstRound = audio.notes.filter((note) => note.atMs <= 45_000);
  assert.deepEqual(firstRound, [
    { atMs: 40_000, note: 'G4', durationMs: 180 },
    { atMs: 40_180, note: 'D4', durationMs: 180 },
    { atMs: 40_360, note: 'D4', durationMs: 180 },
    { atMs: 40_540, note: 'G4', durationMs: 180 },
    { atMs: 40_720, note: 'D4', durationMs: 180 },
    { atMs: 43_000, note: 'C4', durationMs: 180 },
    { atMs: 44_000, note: 'C4', durationMs: 180 },
    { atMs: 45_000, note: 'C5', durationMs: 180 },
  ]);
  at(39_999);
  timer.tick();
  at(40_000);
  timer.tick();
  assert.equal(audio.notes.filter((note) => note.atMs === 40_000).length, 1);
});

test('resuming a partly finished rest re-schedules only the remaining countdown', () => {
  const { timer, audio, at } = setup();
  timer.start();
  at(43_500);
  timer.pause();
  audio.calls = [];
  at(90_000);
  timer.start();
  assert.deepEqual(audio.notes.filter((note) => note.atMs <= 91_500), [
    { atMs: 90_500, note: 'C4', durationMs: 180 },
    { atMs: 91_500, note: 'C5', durationMs: 180 },
  ]);
});

test('one-second rest does not chime before its start; its one/zero cues remain', () => {
  const { timer, audio } = setup([
    { id: 'work', name: 'Work', duration: 4, cue: 'work' },
    { id: 'rest', name: 'Rest', duration: 1, cue: 'rest' },
  ]);
  timer.start();
  assert.deepEqual(audio.notes.filter((note) => note.note.startsWith('C')).slice(0, 2), [
    { atMs: 4_000, note: 'C4', durationMs: 180 },
    { atMs: 5_000, note: 'C5', durationMs: 180 },
  ]);
});

test('muting cancels sound and unmuting never replays missed historical cues', () => {
  const { timer, audio, at } = setup();
  timer.start();
  timer.setMuted(true);
  assert.equal(audio.cancellations, 1);
  audio.calls = [];
  at(43_500);
  timer.tick();
  assert.equal(audio.calls.length, 0);
  timer.setMuted(false);
  assert.deepEqual(audio.notes.filter((note) => note.atMs <= 45_000), [
    { atMs: 44_000, note: 'C4', durationMs: 180 },
    { atMs: 45_000, note: 'C5', durationMs: 180 },
  ]);
});

test('a long suspended page schedules only future cues when it catches up', () => {
  const { timer, audio, at } = setup();
  timer.start();
  audio.calls = [];
  at(45_000 * 8 + 40_100);
  timer.tick();
  assert.equal(timer.activeSegment.get().id, 'rest');
  assert.ok(audio.notes.length > 0);
  assert.ok(audio.notes.every((note) => note.atMs >= 400_100));
  assert.deepEqual(audio.notes.slice(0, 3).map((note) => note.atMs), [403_000, 404_000, 405_000]);
});

test('removing an unknown or sole interval is a no-op, including clock and audio state', () => {
  const { timer, audio, at } = setup([DEFAULT_SEGMENTS[0]!]);
  timer.start();
  const originalSegments = timer.segments.get();
  const scheduledCalls = audio.calls.length;
  at(10_000);
  assert.equal(timer.removeSegment('missing'), false);
  assert.equal(timer.removeSegment('work'), false);
  assert.equal(timer.segments.get(), originalSegments);
  assert.equal(timer.remainingMs.get(), 40_000);
  assert.equal(timer.status.get(), 'running');
  assert.equal(timer.round.get(), 1);
  assert.equal(audio.cancellations, 0);
  assert.equal(audio.calls.length, scheduledCalls);
});

test('deleting an earlier interval keeps the running identity, deadline, and completed cycles', () => {
  const { timer, audio, at } = setup([
    { id: 'warmup', name: 'Warm up', duration: 10, cue: 'work' },
    { id: 'work', name: 'Work', duration: 20, cue: 'work' },
    { id: 'rest', name: 'Rest', duration: 5, cue: 'rest' },
  ]);
  timer.start();
  at(46_000);
  audio.calls = [];
  assert.equal(timer.removeSegment('warmup'), true);
  assert.equal(timer.activeSegment.get().id, 'work');
  assert.equal(timer.index.get(), 0);
  assert.equal(timer.remainingMs.get(), 19_000);
  assert.equal(timer.status.get(), 'running');
  assert.equal(timer.round.get(), 2);
  assert.equal(timer.totalDuration.get(), 25);
  assert.equal(audio.cancellations, 1);
  assert.deepEqual(audio.notes.filter((note) => note.atMs <= 70_000).map(({ atMs, note }) => ({ atMs, note })), [
    { atMs: 65_000, note: 'G4' },
    { atMs: 65_180, note: 'D4' },
    { atMs: 65_360, note: 'D4' },
    { atMs: 65_540, note: 'G4' },
    { atMs: 65_720, note: 'D4' },
    { atMs: 68_000, note: 'C4' },
    { atMs: 69_000, note: 'C4' },
    { atMs: 70_000, note: 'C5' },
  ]);
  at(70_000);
  timer.tick();
  assert.equal(timer.activeSegment.get().id, 'work');
  assert.equal(timer.round.get(), 3);
  assert.equal(timer.remainingMs.get(), 20_000);
});

test('deleting the active running interval gives the following interval its full duration', () => {
  const { timer, audio, at } = setup();
  timer.start();
  at(7_500);
  audio.calls = [];
  assert.equal(timer.removeSegment('work'), true);
  assert.equal(timer.activeSegment.get().id, 'rest');
  assert.equal(timer.remainingMs.get(), 5_000);
  assert.equal(timer.status.get(), 'running');
  assert.equal(timer.round.get(), 1);
  assert.equal(audio.cancellations, 1);
  assert.deepEqual(audio.notes.slice(0, 3), [
    { atMs: 10_500, note: 'C4', durationMs: 180 },
    { atMs: 11_500, note: 'C4', durationMs: 180 },
    { atMs: 12_500, note: 'C5', durationMs: 180 },
  ]);
  at(12_500);
  timer.tick();
  assert.equal(timer.round.get(), 2);
  assert.equal(timer.remainingMs.get(), 5_000);
});

test('deleting a later paused interval preserves pause and the active remainder', () => {
  const { timer, audio, at } = setup([
    ...DEFAULT_SEGMENTS,
    { id: 'finish', name: 'Finish', duration: 10, cue: 'work' },
  ]);
  timer.start();
  at(12_345.5);
  timer.pause();
  audio.calls = [];
  at(99_000);
  assert.equal(timer.removeSegment('finish'), true);
  assert.equal(timer.status.get(), 'paused');
  assert.equal(timer.activeSegment.get().id, 'work');
  assert.equal(timer.remainingMs.get(), 27_654.5);
  assert.equal(timer.round.get(), 1);
  assert.equal(audio.calls.length, 0);
  timer.start();
  at(126_654.5);
  timer.tick();
  assert.equal(timer.activeSegment.get().id, 'rest');
  assert.equal(timer.remainingMs.get(), 5_000);
});

test('deleting the final active interval wraps once while preserving paused or idle status', () => {
  for (const status of ['paused', 'idle'] as const) {
    const { timer, audio, at } = setup([
      ...DEFAULT_SEGMENTS,
      { id: 'finish', name: 'Finish', duration: 10, cue: 'work' },
    ]);
    if (status === 'paused') {
      timer.start();
      at(46_000);
      timer.pause();
    } else {
      timer.skip();
      timer.skip();
    }
    audio.calls = [];
    assert.equal(timer.removeSegment('finish'), true);
    assert.equal(timer.status.get(), status);
    assert.equal(timer.activeSegment.get().id, 'work');
    assert.equal(timer.index.get(), 0);
    assert.equal(timer.remainingMs.get(), 40_000);
    assert.equal(timer.round.get(), 2);
    assert.equal(audio.calls.length, 0);
  }
});

test('removal resolves an elapsed boundary before deciding whether it deletes the active interval', () => {
  const { timer, at } = setup();
  timer.start();
  at(40_000);
  assert.equal(timer.removeSegment('work'), true);
  assert.equal(timer.activeSegment.get().id, 'rest');
  assert.equal(timer.remainingMs.get(), 5_000);
  assert.equal(timer.round.get(), 1);

  const last = setup([
    ...DEFAULT_SEGMENTS,
    { id: 'finish', name: 'Finish', duration: 10, cue: 'work' },
  ]);
  last.timer.start();
  last.at(45_000);
  assert.equal(last.timer.removeSegment('finish'), true);
  assert.equal(last.timer.activeSegment.get().id, 'work');
  assert.equal(last.timer.remainingMs.get(), 40_000);
  assert.equal(last.timer.round.get(), 2);
  assert.equal(last.timer.status.get(), 'running');
  last.at(85_000);
  last.timer.tick();
  assert.equal(last.timer.activeSegment.get().id, 'rest');
  assert.equal(last.timer.remainingMs.get(), 5_000);
});
