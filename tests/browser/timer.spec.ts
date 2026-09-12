import { test, expect, type Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const button = (page: Page, name: string) => page.getByRole('button', { name, exact: true });
const editor = (page: Page) => page.getByRole('dialog', { name: 'Your intervals' });
const seconds = (page: Page) => page.getByRole('spinbutton', { name: 'Seconds', exact: true });
const intervalRows = (page: Page) => page.getByRole('region', { name: 'Your intervals' }).getByRole('listitem');

async function seedOverviewIntervals(page: Page, count = 5) {
  const segments = [
    { id: 'work', name: 'Work', duration: 10, cue: 'work' },
    { id: 'rest', name: 'Rest', duration: 5, cue: 'rest' },
    { id: 'warmup', name: 'Warmup', duration: 8, cue: 'work' },
    { id: 'sprint', name: 'Sprint', duration: 6, cue: 'work' },
    { id: 'cooldown', name: 'Cooldown', duration: 10, cue: 'rest' },
  ].slice(0, count);
  await page.evaluate(segments => {
    localStorage.setItem('tabata-time:v1', JSON.stringify({ segments, muted: false }));
  }, segments);
  await page.reload();
  await expect(intervalRows(page)).toHaveCount(count);
}

async function openEditor(page: Page) {
  await button(page, 'Edit intervals').click();
  await expect(editor(page)).toBeVisible();
}

async function startSilentClock(page: Page) {
  await button(page, 'Sound on').click();
  const fixedTime = new Date('2026-09-11T12:00:00');
  await page.clock.install({ time: fixedTime });
  await page.clock.pauseAt(fixedTime);
  await button(page, 'Start timer').click();
  await expect(button(page, 'Pause')).toBeVisible();
}

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await expect(button(page, 'Start timer')).toBeVisible();
});

test('starts with two intervals and no completed cycles', async ({ page }) => {
  await expect(intervalRows(page)).toHaveCount(2);
  await expect(intervalRows(page)).toHaveText(['Work40s', 'Rest5s']);
  await expect(page.getByRole('timer')).toHaveText('00:40');
  await expect(page.locator('.completed-cycles')).toHaveText('0 cycles complete');
  await expect(page.getByText(/^Cycle \d+$/)).toHaveCount(0);
  await expect(page.locator('.repeat-note')).toContainText('00:45 per cycle');
  await expect(button(page, 'Reset timer')).toHaveCount(0);
  await expect(button(page, 'Next interval')).toHaveCount(0);
  await expect(page.getByRole('link', { name: 'Progress Report' })).toHaveCount(0);
});

test('counts a cycle only after every default interval finishes', async ({ page }) => {
  await startSilentClock(page);
  await page.clock.fastForward(39_000);
  await expect(page.getByRole('timer')).toHaveText('00:01');
  await expect(page.locator('.completed-cycles')).toHaveText('0 cycles complete');

  await page.clock.fastForward(1_000);
  await expect(page.getByRole('heading', { name: 'Rest', exact: true })).toBeVisible();
  await expect(page.getByRole('timer')).toHaveText('00:05');
  await expect(page.locator('.completed-cycles')).toHaveText('0 cycles complete');

  await page.clock.fastForward(4_000);
  await expect(page.getByRole('timer')).toHaveText('00:01');
  await expect(page.locator('.completed-cycles')).toHaveText('0 cycles complete');
  await page.clock.fastForward(1_000);
  await expect(page.getByRole('heading', { name: 'Work', exact: true })).toBeVisible();
  await expect(page.getByRole('timer')).toHaveText('00:40');
  await expect(page.locator('.completed-cycles')).toHaveText('1 cycle complete');

  // A tab that resumes after several cycles still reports the correct completed count.
  await page.clock.fastForward(135_000);
  await expect(page.locator('.completed-cycles')).toHaveText('4 cycles complete');
});

test('pause preserves remaining time, resume continues, and reset clears progress', async ({ page }) => {
  await startSilentClock(page);
  await page.clock.fastForward(12_000);
  await button(page, 'Pause').click();
  await expect(page.getByRole('timer')).toHaveText('00:28');
  await expect(button(page, 'Resume')).toBeVisible();
  await page.clock.fastForward(90_000);
  await expect(page.getByRole('timer')).toHaveText('00:28');
  await button(page, 'Resume').click();
  await page.clock.fastForward(28_000);
  await expect(page.getByRole('heading', { name: 'Rest', exact: true })).toBeVisible();
  await page.clock.fastForward(5_000);
  await expect(page.locator('.completed-cycles')).toHaveText('1 cycle complete');
  await button(page, 'Reset timer').click();
  await expect(button(page, 'Start timer')).toBeVisible();
  await expect(page.getByRole('timer')).toHaveText('00:40');
  await expect(page.locator('.completed-cycles')).toHaveText('0 cycles complete');
});

for (const viewport of [{ width: 1280, height: 900 }, { width: 375, height: 812 }]) {
  test(`timer name and countdown remain fixed at ${viewport.width}px`, async ({ page }) => {
    await page.setViewportSize(viewport);
    const caption = page.locator('.dial-caption');
    await expect(caption).toHaveText('Ready');
    await expect(caption).toBeVisible();
    const bounds = () => page.locator('.segment-label, .digits').evaluateAll(elements => elements.map(element => {
      const { x, y, width, height } = element.getBoundingClientRect();
      return { x, y, width, height };
    }));
    const ready = await bounds();
    await startSilentClock(page);
    await expect(caption).toBeHidden();
    expect(await bounds(), 'Starting must preserve the name and countdown geometry').toEqual(ready);
    await page.clock.fastForward(1_000);
    await expect(page.getByRole('timer')).toHaveText('00:39');
    expect(await bounds(), 'Countdown ticks must preserve the name and countdown geometry').toEqual(ready);
    await button(page, 'Pause').click();
    await expect(button(page, 'Resume')).toBeVisible();
    await expect(caption).toHaveText('Paused');
    await expect(caption).toBeVisible();
    expect(await bounds(), 'Pausing must preserve the name and countdown geometry').toEqual(ready);
    await button(page, 'Resume').click();
    await expect(button(page, 'Pause')).toBeVisible();
    await expect(caption).toBeHidden();
    expect(await bounds(), 'Resuming must preserve the name and countdown geometry').toEqual(ready);
    await button(page, 'Reset timer').click();
    await expect(button(page, 'Start timer')).toBeVisible();
    await expect(page.getByRole('timer')).toHaveText('00:40');
    await expect(caption).toHaveText('Ready');
    await expect(caption).toBeVisible();
    expect(await bounds(), 'Resetting must preserve the name and countdown geometry').toEqual(ready);
  });
}

test('edits and persists names, durations, chimes, and extra intervals', async ({ page }) => {
  await openEditor(page);
  await page.getByRole('textbox', { name: 'Interval 1', exact: true }).fill('Sprint');
  await seconds(page).nth(0).fill('3');
  await seconds(page).nth(1).fill('2');
  await button(page, 'Add interval').click();
  await page.getByRole('textbox', { name: 'Interval 3', exact: true }).fill('Cooldown');
  await seconds(page).nth(2).fill('1');
  await page.getByRole('combobox', { name: 'Chime', exact: true }).nth(2).selectOption('rest');
  await button(page, 'Save intervals').click();
  await expect(editor(page)).not.toBeVisible();
  await expect(intervalRows(page).locator('.segment-name')).toHaveText(['Sprint', 'Rest', 'Cooldown']);
  await expect(intervalRows(page).locator('.segment-duration')).toHaveText(['3s', '2s', '1s']);
  await expect(page.locator('.repeat-note')).toContainText('00:06 per cycle');
  await page.reload();
  await expect(intervalRows(page).locator('.segment-name')).toHaveText(['Sprint', 'Rest', 'Cooldown']);
  await expect(intervalRows(page).locator('.segment-duration')).toHaveText(['3s', '2s', '1s']);
  await openEditor(page);
  await expect(page.getByRole('combobox', { name: 'Chime', exact: true }).nth(2)).toHaveValue('rest');
  await button(page, 'Cancel').click();

  await startSilentClock(page);
  await page.clock.fastForward(3_000);
  await expect(page.getByRole('heading', { name: 'Rest', exact: true })).toBeVisible();
  await expect(page.locator('.completed-cycles')).toHaveText('0 cycles complete');
  await page.clock.fastForward(2_000);
  await expect(page.getByRole('heading', { name: 'Cooldown', exact: true })).toBeVisible();
  await expect(page.locator('.completed-cycles')).toHaveText('0 cycles complete');
  await page.clock.fastForward(1_000);
  await expect(page.getByRole('heading', { name: 'Sprint', exact: true })).toBeVisible();
  await expect(page.locator('.completed-cycles')).toHaveText('1 cycle complete');
});

test('removes intervals while retaining at least one usable interval', async ({ page }) => {
  await openEditor(page);
  await button(page, 'Remove interval 1').click();
  await expect(page.getByRole('textbox', { name: 'Interval 1', exact: true })).toHaveValue('Rest');
  await expect(button(page, 'Remove interval 1')).toBeDisabled();
  await button(page, 'Save intervals').click();
  await expect(intervalRows(page)).toHaveText(['Rest5s']);
  await startSilentClock(page);
  await page.clock.fastForward(5_000);
  await expect(page.locator('.completed-cycles')).toHaveText('1 cycle complete');
});

test('rejects missing names and empty, zero, or fractional durations without saving', async ({ page }) => {
  await openEditor(page);
  await page.getByRole('textbox', { name: 'Interval 1', exact: true }).fill('  ');
  await button(page, 'Save intervals').click();
  await expect(page.getByRole('alert')).toHaveText('Give each interval a name, up to 40 characters.');
  await page.getByRole('textbox', { name: 'Interval 1', exact: true }).fill('Work');
  for (const invalid of ['', '0', '1.5']) {
    await seconds(page).nth(0).fill(invalid);
    await button(page, 'Save intervals').click();
    await expect(editor(page)).toBeVisible();
    await expect(page.getByRole('alert')).toHaveText('Use a whole number from 1 to 3,600 seconds for each interval.');
  }
  await button(page, 'Cancel').click();
  await page.reload();
  await expect(intervalRows(page)).toHaveText(['Work40s', 'Rest5s']);
});

test('editor pauses the timer and Cancel or Escape discards drafts and returns focus', async ({ page }) => {
  await startSilentClock(page);
  await page.clock.fastForward(4_000);
  await openEditor(page);
  await page.getByRole('textbox', { name: 'Interval 1', exact: true }).fill('Discarded');
  await page.clock.fastForward(20_000);
  await button(page, 'Cancel').click();
  await expect(button(page, 'Edit intervals')).toBeFocused();
  await expect(button(page, 'Resume')).toBeVisible();
  await expect(page.getByRole('timer')).toHaveText('00:36');
  await expect(intervalRows(page)).toHaveText(['Work40s', 'Rest5s']);
  await openEditor(page);
  await expect(page.getByRole('textbox', { name: 'Interval 1', exact: true })).toHaveValue('Work');
  await page.getByRole('textbox', { name: 'Interval 1', exact: true }).fill('Also discarded');
  await page.keyboard.press('Escape');
  await expect(editor(page)).not.toBeVisible();
  await expect(button(page, 'Edit intervals')).toBeFocused();
  await expect(intervalRows(page)).toHaveText(['Work40s', 'Rest5s']);
});

test('Space toggles the timer from the page and remains text inside the editor', async ({ page }) => {
  await button(page, 'Sound on').click();
  await page.locator('header').click({ position: { x: 300, y: 30 } });
  await page.keyboard.press('Space');
  await expect(button(page, 'Pause')).toBeVisible();
  await page.keyboard.press('Space');
  await expect(button(page, 'Resume')).toBeVisible();
  await openEditor(page);
  const name = page.getByRole('textbox', { name: 'Interval 1', exact: true });
  await name.fill('Long');
  await name.press('End');
  await name.press('Space');
  await name.pressSequentially('work');
  await expect(name).toHaveValue('Long work');
  await expect(editor(page)).toBeVisible();
  await button(page, 'Cancel').click();
  await expect(button(page, 'Resume')).toBeVisible();
});

test('M toggles sound from its focused button, persists, and ignores typing or repeated keys', async ({ page }) => {
  await button(page, 'Sound on').focus();
  await page.keyboard.press('m');
  await expect(button(page, 'Sound off')).toBeVisible();
  await expect(button(page, 'Start timer')).toBeVisible();
  await page.reload();
  await expect(button(page, 'Sound off')).toBeVisible();

  // Unmuting uses the real browser AudioContext unlock through a keyboard gesture.
  await button(page, 'Sound off').focus();
  await page.keyboard.press('m');
  await expect(button(page, 'Sound on')).toBeVisible();
  await expect(page.locator('.audio-notice')).toHaveCount(0);
  await page.reload();
  await expect(button(page, 'Sound on')).toBeVisible();

  await button(page, 'Sound on').focus();
  await page.keyboard.down('m');
  await expect(button(page, 'Sound off')).toBeVisible();
  await page.keyboard.down('m');
  await expect(button(page, 'Sound off')).toBeVisible();
  await page.keyboard.up('m');
  await page.keyboard.press('Control+m');
  await expect(button(page, 'Sound off')).toBeVisible();

  await openEditor(page);
  const name = page.getByRole('textbox', { name: 'Interval 1', exact: true });
  await name.fill('War');
  await name.press('End');
  await name.press('m');
  await expect(name).toHaveValue('Warm');
  await button(page, 'Cancel').click();
  await expect(button(page, 'Sound off')).toBeVisible();
  await expect(button(page, 'Start timer')).toBeVisible();
});

test('overview deletion reveals on hover without layout shift and persists non-active removal', async ({ page }, testInfo) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await seedOverviewIntervals(page);
  await expect(intervalRows(page).nth(0).locator('.segment-delete')).toHaveCount(0);
  await expect(intervalRows(page).nth(1).locator('.segment-delete')).toHaveCount(0);
  await expect(page.getByRole('button', { name: /^Delete interval / })).toHaveCount(3);
  await page.locator('header').hover();
  const deletion = intervalRows(page).nth(2).locator('.segment-delete');
  await expect(deletion).toHaveCSS('opacity', '0');
  await expect(deletion).toHaveCSS('pointer-events', 'none');
  const geometry = () => page.locator('tabata-app').evaluate(app =>
    [...app.shadowRoot!.querySelectorAll('.dial, .actions, .segment, .segment-name, .segment-duration')].map(el => {
      const { x, y, width, height } = el.getBoundingClientRect();
      return { x, y, width, height };
    }));
  const beforeHover = await geometry();
  await intervalRows(page).nth(2).hover();
  await expect(deletion).toHaveCSS('opacity', '1');
  await expect(deletion).toHaveCSS('pointer-events', 'auto');
  expect(await geometry()).toEqual(beforeHover);
  if (testInfo.project.name === 'chromium') {
    await page.screenshot({ path: testInfo.outputPath('overview-delete-hover.png'), fullPage: true });
  }

  await startSilentClock(page);
  await page.clock.fastForward(3_000);
  await intervalRows(page).nth(2).hover();
  await button(page, 'Delete interval 3: Warmup').click();
  await expect(intervalRows(page).locator('.segment-name')).toHaveText(['Work', 'Rest', 'Sprint', 'Cooldown']);
  await expect(button(page, 'Pause')).toBeVisible();
  await expect(page.getByRole('timer')).toHaveText('00:07');
  await expect(page.locator('.completed-cycles')).toHaveText('0 cycles complete');
  await page.clock.fastForward(1_000);
  await expect(page.getByRole('timer')).toHaveText('00:06');
  await page.reload();
  await expect(intervalRows(page).locator('.segment-name')).toHaveText(['Work', 'Rest', 'Sprint', 'Cooldown']);
  await expect(button(page, 'Start timer')).toBeVisible();
});

test('overview deletion restores keyboard focus and Space does not toggle the timer', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await seedOverviewIntervals(page);
  await startSilentClock(page);
  await button(page, 'Delete interval 5: Cooldown').focus();
  const initialScrollY = await page.evaluate(() => scrollY);
  const expectRecoveredFocus = async (name: string) => {
    const control = button(page, name);
    await expect(control).toBeFocused();
    const bounds = await control.boundingBox();
    const row = await page.locator('.segments').boundingBox();
    expect(bounds!.x).toBeGreaterThanOrEqual(row!.x);
    expect(bounds!.x + bounds!.width).toBeLessThanOrEqual(row!.x + row!.width + 1);
    expect(await page.evaluate(() => scrollY), 'Focus recovery must not move the page').toBe(initialScrollY);
  };
  await expect(intervalRows(page).last().locator('.segment-delete')).toHaveCSS('opacity', '1');
  await page.keyboard.press('Space');
  await expect(intervalRows(page)).toHaveCount(4);
  await expectRecoveredFocus('Delete interval 4: Sprint');
  await expect(button(page, 'Pause')).toBeVisible();

  await button(page, 'Delete interval 3: Warmup').focus();
  await page.keyboard.press('Enter');
  await expect(intervalRows(page)).toHaveCount(3);
  await expectRecoveredFocus('Delete interval 3: Sprint');
  await page.keyboard.press('Space');
  await expect(intervalRows(page)).toHaveCount(2);
  await expect(button(page, 'Edit intervals')).toBeFocused();
  expect(await page.evaluate(() => scrollY)).toBe(initialScrollY);
  await expect(button(page, 'Pause')).toBeVisible();
  await expect(page.getByRole('timer')).toHaveText('00:10');
  await expect(page.getByRole('button', { name: /^Delete interval / })).toHaveCount(0);
});

test('overview deletion advances an active interval and counts a wrap while running', async ({ page }) => {
  await seedOverviewIntervals(page, 4);
  await startSilentClock(page);
  await page.clock.fastForward(15_000);
  await expect(page.getByRole('heading', { name: 'Warmup', exact: true })).toBeVisible();
  await intervalRows(page).nth(2).hover();
  await button(page, 'Delete interval 3: Warmup').click();
  await expect(page.getByRole('heading', { name: 'Sprint', exact: true })).toBeVisible();
  await expect(page.getByRole('timer')).toHaveText('00:06');
  await expect(page.locator('.completed-cycles')).toHaveText('0 cycles complete');
  await expect(button(page, 'Pause')).toBeVisible();
  await page.clock.fastForward(2_000);
  await expect(page.getByRole('timer')).toHaveText('00:04');
  await intervalRows(page).nth(2).hover();
  await button(page, 'Delete interval 3: Sprint').click();
  await expect(page.getByRole('heading', { name: 'Work', exact: true })).toBeVisible();
  await expect(page.getByRole('timer')).toHaveText('00:10');
  await expect(page.locator('.completed-cycles')).toHaveText('1 cycle complete');
  await expect(button(page, 'Pause')).toBeVisible();
  await expect(intervalRows(page)).toHaveCount(2);
});

test.describe('touch overview deletion', () => {
  test.use({ hasTouch: true, viewport: { width: 375, height: 812 } });
  test('overview deletion remains visible and tappable without hover', async ({ page }, testInfo) => {
    await seedOverviewIntervals(page, 3);
    expect(await page.evaluate(() => matchMedia('(hover: none)').matches)).toBe(true);
    const deletion = intervalRows(page).nth(2).locator('.segment-delete');
    await expect(deletion).toHaveCSS('opacity', '1');
    await expect(deletion).toHaveCSS('pointer-events', 'auto');
    const control = button(page, 'Delete interval 3: Warmup');
    const bounds = await control.boundingBox();
    expect(bounds!.width).toBeGreaterThanOrEqual(44);
    expect(bounds!.height).toBeGreaterThanOrEqual(44);
    if (testInfo.project.name === 'chromium') {
      await control.scrollIntoViewIfNeeded();
      await page.screenshot({ path: testInfo.outputPath('overview-delete-touch.png'), fullPage: true });
    }
    await control.tap();
    await expect(intervalRows(page)).toHaveCount(2);
    await expect(button(page, 'Start timer')).toBeVisible();
  });
});

for (const viewport of [{ width: 1280, height: 900 }, { width: 375, height: 812 }]) {
  test(`interval overview grows horizontally without moving the timer at ${viewport.width}px`, async ({ page }, testInfo) => {
    await page.setViewportSize(viewport);
    const readLayout = () => page.locator('tabata-app').evaluate(app => {
      const root = app.shadowRoot!;
      const bounds = (selector: string) => {
        const rect = root.querySelector(selector)!.getBoundingClientRect();
        return { x: rect.x, y: rect.y + scrollY, width: rect.width, height: rect.height };
      };
      const list = root.querySelector<HTMLElement>('.segments')!;
      return {
        dial: bounds('.dial'), actions: bounds('.actions'), row: bounds('.segments'),
        intervals: [...list.children].map(el => ({ y: el.getBoundingClientRect().y + scrollY, height: el.getBoundingClientRect().height })),
        scrollWidth: list.scrollWidth, clientWidth: list.clientWidth,
        documentWidth: document.documentElement.scrollWidth, viewportWidth: innerWidth,
      };
    });
    const initial = await readLayout();
    const layouts = [initial];
    for (const count of [3, 8]) {
      await openEditor(page);
      const previousCount = count === 3 ? 2 : 3;
      for (let i = previousCount + 1; i <= count; i += 1) {
        await button(page, 'Add interval').click();
        await page.getByRole('textbox', { name: `Interval ${i}`, exact: true }).fill(`Focused movement interval ${i}`);
      }
      await button(page, 'Save intervals').click();
      await expect(editor(page)).not.toBeVisible();
      await expect(intervalRows(page)).toHaveCount(count);
      layouts.push(await readLayout());
    }

    for (const layout of layouts) {
      for (const name of ['dial', 'actions', 'row'] as const) {
        expect(Math.abs(layout[name].y - initial[name].y), `${name} must keep its vertical position`).toBeLessThanOrEqual(1);
      }
      expect(Math.abs(layout.row.height - initial.row.height), 'Adding intervals must not increase row height').toBeLessThanOrEqual(1);
      const first = layout.intervals[0]!;
      for (const interval of layout.intervals) {
        expect(Math.abs(interval.y - first.y), 'Every interval must stay in the same row').toBeLessThanOrEqual(1);
        expect(Math.abs(interval.height - first.height)).toBeLessThanOrEqual(1);
      }
      expect(layout.row.width).toBeLessThanOrEqual(viewport.width + 1);
      expect(Math.abs(layout.row.x + layout.row.width / 2 - viewport.width / 2), 'The overview must remain centered').toBeLessThanOrEqual(1);
      expect(layout.documentWidth).toBeLessThanOrEqual(layout.viewportWidth);
    }
    const three = layouts[1]!;
    const eight = layouts[2]!;
    if (viewport.width > 600) {
      expect(three.row.width, 'The third interval should widen the overview').toBeGreaterThan(initial.row.width);
      expect(eight.row.width).toBeGreaterThan(three.row.width);
    }
    expect(eight.scrollWidth).toBeGreaterThan(eight.clientWidth);
    expect(Math.abs(eight.row.width - viewport.width), 'A full row should expand to the viewport edges').toBeLessThanOrEqual(1);

    if (viewport.width < 600) {
      if (testInfo.project.name === 'chromium') {
        const accessibility = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
        expect(accessibility.violations).toEqual([]);
      }
      const list = page.locator('.segments');
      await button(page, 'Edit intervals').focus();
      await page.keyboard.press('Tab');
      await expect(list).toBeFocused();
      await page.keyboard.press('ArrowRight');
      await expect.poll(() => list.evaluate(el => el.scrollLeft)).toBeGreaterThan(0);
      // Keyboard scrolling must reach the last interval without a pointer gesture.
      for (let i = 0; i < 60; i += 1) await page.keyboard.press('ArrowRight');
      await expect.poll(() => list.evaluate(el => {
        const last = el.lastElementChild!.getBoundingClientRect();
        return last.right <= el.getBoundingClientRect().right + 1;
      })).toBe(true);
    }

    await startSilentClock(page);
    const pageScrollBefore = await page.evaluate(() => scrollY);
    for (let i = 0; i < 7; i += 1) await button(page, 'Next interval').click();
    await expect(intervalRows(page).last()).toHaveAttribute('aria-current', 'step');
    const activeBounds = await intervalRows(page).last().boundingBox();
    const rowBounds = await page.locator('.segments').boundingBox();
    expect(activeBounds!.x).toBeGreaterThanOrEqual(rowBounds!.x);
    expect(activeBounds!.x + activeBounds!.width).toBeLessThanOrEqual(rowBounds!.x + rowBounds!.width + 1);
    expect(await page.evaluate(() => scrollY), 'Revealing the active interval must not scroll the page').toBe(pageScrollBefore);
    const activeLayout = await readLayout();
    for (const name of ['dial', 'actions', 'row'] as const) {
      expect(Math.abs(activeLayout[name].y - initial[name].y), `${name} must stay fixed when the active interval changes`).toBeLessThanOrEqual(1);
    }
    if (testInfo.project.name === 'chromium') {
      await page.screenshot({ path: testInfo.outputPath(`overview-8-${viewport.width}.png`), fullPage: true });
    }
  });
}

for (const height of [812, 360]) {
  test(`active interval reveal follows the real clock without moving the page at ${height}px height`, async ({ page }) => {
    await page.setViewportSize({ width: 375, height });
    await page.evaluate(() => {
      localStorage.setItem('tabata-time:v1', JSON.stringify({
        muted: true,
        segments: Array.from({ length: 8 }, (_, i) => ({ id: `movement-${i}`, name: `Focused movement ${i + 1}`, duration: 1, cue: 'work' })),
      }));
    });
    await page.reload();
    await expect(intervalRows(page)).toHaveCount(8);
    const hasNativeReveal = await page.evaluate(() => {
      const calls: Array<boolean | undefined> = [];
      (window as Window & { intervalRevealCalls?: Array<boolean | undefined> }).intervalRevealCalls = calls;
      const prototype = HTMLElement.prototype as HTMLElement & { scrollIntoViewIfNeeded?: (center?: boolean) => void };
      const original = prototype.scrollIntoViewIfNeeded;
      if (typeof original !== 'function') return false;
      prototype.scrollIntoViewIfNeeded = function (this: HTMLElement, center?: boolean) {
        calls.push(center);
        original.call(this, center);
      };
      return true;
    });
    const list = page.locator('.segments');
    const activeIsRevealed = () => list.evaluate(el => {
      const row = el.getBoundingClientRect();
      const active = el.querySelector('[data-active]')!.getBoundingClientRect();
      return active.left >= row.left - 1 && active.right <= row.right + 1;
    });
    const position = () => page.locator('tabata-app').evaluate(app => ({
      scrollY,
      dialY: app.shadowRoot!.querySelector('.dial')!.getBoundingClientRect().y,
      actionsY: app.shadowRoot!.querySelector('.actions')!.getBoundingClientRect().y,
    }));
    const initialPosition = await position();
    const initialRowBounds = await list.boundingBox();
    if (height === 360) expect(initialRowBounds!.y).toBeGreaterThanOrEqual(height);
    else expect(initialRowBounds!.y + initialRowBounds!.height).toBeLessThanOrEqual(height);

    const fixedTime = new Date('2026-09-11T12:00:00');
    await page.clock.install({ time: fixedTime });
    await page.clock.pauseAt(fixedTime);
    if (height === 812) {
      await list.focus();
      await page.keyboard.press('End');
      expect(await activeIsRevealed()).toBe(false);
      await button(page, 'Start timer').click();
    } else {
      // Start from the page keyboard shortcut: a click would scroll the offscreen button into view.
      await page.keyboard.press('Space');
    }
    await expect(button(page, 'Pause')).toBeVisible();
    expect(await activeIsRevealed()).toBe(true);
    const visibleScroll = await list.evaluate(el => el.scrollLeft);
    await page.clock.fastForward(100);
    expect(await list.evaluate(el => el.scrollLeft), 'An already visible active interval should not scroll').toBe(visibleScroll);

    if (height === 812) {
      await button(page, 'Pause').click();
      await list.focus();
      await page.keyboard.press('End');
      expect(await activeIsRevealed()).toBe(false);
      await button(page, 'Resume').click();
      expect(await activeIsRevealed()).toBe(true);
    }
    await page.clock.fastForward(6_900);
    await expect(intervalRows(page).last()).toHaveAttribute('aria-current', 'step');
    expect(await activeIsRevealed()).toBe(true);
    await expect(page.locator('.completed-cycles')).toHaveText('0 cycles complete');
    await page.clock.fastForward(1_000);
    await expect(intervalRows(page).first()).toHaveAttribute('aria-current', 'step');
    expect(await activeIsRevealed()).toBe(true);
    await expect(page.locator('.completed-cycles')).toHaveText('1 cycle complete');

    if (height === 812) {
      await list.focus();
      await page.keyboard.press('End');
      // Catching up exactly one cycle retains the active index but must still reveal it.
      await page.clock.fastForward(8_000);
      await expect(page.locator('.completed-cycles')).toHaveText('2 cycles complete');
      expect(await activeIsRevealed()).toBe(true);
    }
    const finalPosition = await position();
    expect(finalPosition.scrollY).toBe(initialPosition.scrollY);
    expect(finalPosition.dialY).toBe(initialPosition.dialY);
    expect(finalPosition.actionsY).toBe(initialPosition.actionsY);
    const nativeCalls = await page.evaluate(() => (window as Window & { intervalRevealCalls?: Array<boolean | undefined> }).intervalRevealCalls!);
    if (hasNativeReveal && height === 812) {
      expect(nativeCalls.length, 'Use the requested native reveal method when supported and safe').toBeGreaterThan(0);
      expect(nativeCalls.every(center => center === false)).toBe(true);
    } else {
      expect(nativeCalls, 'Use horizontal-only fallback for an offscreen row or unsupported browser').toEqual([]);
    }
  });
}

for (const width of [650, 375, 320]) {
  test(`timer and interval editor fit ${width}px without horizontal overflow`, async ({ page }, testInfo) => {
    await page.setViewportSize({ width, height: 720 });
    await expect(page.getByRole('timer')).toBeVisible();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await openEditor(page);
    for (const selector of ['en-dialog dialog', 'en-dialog [part="body"]']) {
      expect(await page.locator(selector).evaluate(el => el.scrollWidth <= el.clientWidth)).toBe(true);
    }
    const bodyBounds = await page.locator('en-dialog [part="body"]').boundingBox();
    expect(bodyBounds).not.toBeNull();
    for (const control of await page.locator('.editor-row').locator('input, select, button').all()) {
      const bounds = await control.boundingBox();
      expect(bounds).not.toBeNull();
      expect(bounds!.x).toBeGreaterThanOrEqual(bodyBounds!.x);
      expect(bounds!.x + bounds!.width).toBeLessThanOrEqual(bodyBounds!.x + bodyBounds!.width);
    }
    for (const field of await seconds(page).all()) {
      const fit = await field.evaluate(el => {
        const style = getComputedStyle(el);
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d')!;
        context.font = style.font;
        return {
          available: el.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight),
          required: context.measureText('3600').width,
        };
      });
      expect(fit.available, 'The longest allowed duration must be legible without scrolling the input').toBeGreaterThanOrEqual(fit.required);
    }
    if (testInfo.project.name === 'chromium') {
      await page.screenshot({ path: testInfo.outputPath(`editor-${width}.png`), fullPage: true });
    }
    await button(page, 'Add interval').click();
    await button(page, 'Save intervals').click();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  });
}

test('developer return link uses the trusted report address', async ({ page }) => {
  await page.goto('/?progress-report=https://untrusted.example');
  const report = page.getByRole('link', { name: 'Progress Report' });
  await expect(report).toBeVisible();
  await expect(report).toHaveAttribute('href', 'http://localhost:4318');
});

test('timer and editor pass automated accessibility checks', async ({ page }) => {
  const scan = () => new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
  expect.soft((await scan()).violations).toEqual([]);
  await openEditor(page);
  expect.soft((await scan()).violations).toEqual([]);
});
