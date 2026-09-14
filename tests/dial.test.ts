import assert from 'node:assert/strict';
import test from 'node:test';
import { createDialMarks } from '../src/dial.ts';

test('intervals under ten seconds have half-second marks and longer whole-second marks', () => {
  const rest = createDialMarks(5);
  assert.equal(rest.length, 10);
  rest.forEach((mark, index) => assert.ok(Math.abs(mark.angle - index * 36) < 1e-10));
  assert.deepEqual(rest.filter(mark => mark.major).map(mark => mark.seconds), [0, 1, 2, 3, 4]);
  for (const duration of [1, 5, 9]) {
    const marks = createDialMarks(duration);
    assert.equal(marks.length, duration * 2);
    assert.ok(marks.every(mark => mark.major === Number.isInteger(mark.seconds)));
  }
  assert.equal(createDialMarks(10).length, 10);
  assert.equal(createDialMarks(10)[1]!.seconds, 1);
});

test('work intervals keep one-second marks with five-second major marks', () => {
  const work = createDialMarks(40);
  assert.equal(work.length, 40);
  assert.deepEqual(work.filter(mark => mark.major).map(mark => mark.seconds), [0, 5, 10, 15, 20, 25, 30, 35]);
  assert.equal(work[1]!.angle, 9);
});

test('long intervals use readable time steps without crowding the wrap point', () => {
  for (const [duration, expectedStep] of [[60, 1], [61, 5], [300, 5], [301, 10], [600, 10], [601, 30], [1800, 30], [1801, 60], [3600, 60]]) {
    const marks = createDialMarks(duration!);
    assert.ok(marks.length <= 60);
    assert.equal(marks[1]!.seconds, expectedStep);
    assert.ok(duration! - marks.at(-1)!.seconds >= expectedStep!);
    for (const mark of marks) assert.equal(mark.angle, mark.seconds / duration! * 360);
  }
});

test('all supported whole-second durations produce unique bounded time positions', () => {
  for (let duration = 1; duration <= 3600; duration++) {
    const marks = createDialMarks(duration);
    assert.ok(marks.length >= 1 && marks.length <= 60);
    assert.equal(marks[0]!.angle, 0);
    assert.equal(new Set(marks.map(mark => mark.angle)).size, marks.length);
    assert.ok(marks.every(mark => mark.angle >= 0 && mark.angle < 360 && mark.seconds < duration));
  }
});
