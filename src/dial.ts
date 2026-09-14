export interface DialMark {
  seconds: number;
  angle: number;
  major: boolean;
}

/** Fixed time positions for the full interval, with at most 60 marks. */
export function createDialMarks(durationSeconds: number): DialMark[] {
  if (!Number.isFinite(durationSeconds) || durationSeconds < 1) return [];
  const subdivideSeconds = durationSeconds < 10;
  const step = subdivideSeconds ? 0.5 : ([1, 5, 10, 30, 60].find(seconds => durationSeconds / seconds <= 60)
    ?? Math.ceil(durationSeconds / 3600) * 60);
  // Leave any partial step at the end, avoiding crowded marks near the origin.
  const count = Math.max(1, Math.floor(durationSeconds / step));
  return Array.from({ length: count }, (_, index) => ({
    seconds: index * step,
    angle: index * step / durationSeconds * 360,
    major: subdivideSeconds ? index % 2 === 0 : count <= 12 || index % 5 === 0,
  }));
}
