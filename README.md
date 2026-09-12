# Tabata Time

A focused interval timer built with [Lit](https://lit.dev/), Design System's `en-*` elements, [signal-polyfill](https://github.com/proposal-signals/signal-polyfill), and [signal-utils](https://github.com/proposal-signals/signal-utils).

[Use the timer](https://westbrook.github.io/tabata-time/)

## Run locally

Requires Node 24+. The four `@en-reve/*` packages are pinned snapshots in `vendor/`, so a fresh clone builds without a sibling Design System checkout. See [vendor/README.md](vendor/README.md) for their provenance and license.

```sh
npm ci
npm run dev
```

Open [Tabata Time](http://localhost:4327). `npm run build` produces the static application in `dist/`; `npm run preview` serves that build on the same port.

## Publish to GitHub Pages

The `main` branch holds the source. GitHub Pages serves the root of `gh-pages`, which contains only the built site. The Pages build uses `/tabata-time/` as its asset base, and `.nojekyll` keeps GitHub from processing the static files with Jekyll.

After committing changes on `main`:

```sh
git push origin main
npm run deploy
```

`npm run deploy` builds the Pages version and pushes `dist/` to `gh-pages` on `origin`. It requires GitHub push access through the configured Git remote. GitHub Pages then publishes [the site](https://westbrook.github.io/tabata-time/). To build without publishing, run `npm run build:pages`. To preview that build locally while the dev server runs, use `npm run preview -- --port 4328 --base=/tabata-time/` and open `http://localhost:4328/tabata-time/`.

## Use

- Start with 40 seconds of Work and 5 seconds of Rest. The sequence repeats until paused or reset.
- The “cycles complete” count below the intervals advances only when the entire sequence wraps. Advancing with **Next interval** also counts a wrap.
- “Total time” counts actual running time across intervals and cycles, excluding pauses and skipped durations. Resetting or saving an edited routine clears it.
- Intervals stay in one centered row, expanding to the page edges as needed. Overflow scrolls horizontally with a hidden scrollbar; focus the row and use Left/Right or Home/End. The active interval scrolls into view without moving the timer controls.
- The active interval is revealed on start/resume, interval or cycle changes, and resize. Supported browsers use [`scrollIntoViewIfNeeded(false)`](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoViewIfNeeded); a horizontal-only fallback handles other browsers and rows outside the viewport without moving the page.
- **Edit intervals** pauses a running timer. Add, remove, or rename intervals; set each duration from 1 to 3,600 whole seconds; choose Work or Rest chimes. Saving resets the timer and cycle count. Cancel preserves the previous routine and leaves the timer paused.
- Hover over any interval after the first two to reveal its delete button beside the title. The button also appears on keyboard focus and stays visible on touch screens. Deleting another interval preserves the current countdown; deleting the active interval advances to the next one, counting a cycle if it wraps.
- Intervals and the sound preference are saved in this browser. Reloading starts a fresh timer.
- Press **Space** to start or pause when you are not using a field or button. Start, pause, reset, and next interval also have keyboard-accessible buttons.
- Press **M** to toggle sound. Keyboard shortcuts stay inactive while editing intervals.
- When sound is on, the header slider adjusts chime volume from 0 to 100. Volume is saved on this device and retained when sound is toggled off and on.

Work ends with five equal 180ms notes: **G4, D4, D4, G4, D4**. Rest plays **C4** at 2 seconds remaining, **C4** at 1 second, and **C5** at zero. A shorter Rest interval plays only the countdown cues that fall inside it. The next segment starts immediately at the boundary; the alarm does not add extra time.

The timer uses monotonic deadlines rather than decrementing counters. Chimes are scheduled ahead on the Web Audio clock and canceled on pause, reset, skip, or mute. A supported browser is asked to keep the screen awake while running. Browser and operating-system suspension can still silence background audio; returning to the page catches up the timer without replaying missed alarms.

## Implementation

- `src/timer.ts`: signal-backed state, derived values, interval/cycle timing, and chime plans.
- `src/audio.ts`: Web Audio synthesis and cancellation.
- `src/main.ts`: Lit component and `signal-utils` effect bridge; Design System buttons, number/text fields, selects, icons, and dialog.
- `src/app-styles.ts` and `src/global.css`: responsive layout and Design System theme overrides.

## Verify

```sh
npm test
npm run test:browser
npm run build
```

Unit tests cover deadline drift, cycle catch-up, exact note order/timing, pause/resume, mute/cancellation, and edits. Playwright covers complete UI journeys in Chromium, Firefox, and WebKit, including accessibility checks, mobile layout, persistence, and keyboard control. Install Playwright browser binaries with `npx playwright install` if needed.

## Progress report

The independent local [Progress Report](http://localhost:4318) is located by the gitignored `.progress-report/project.json`. Its canonical state and server live outside this app and are not published. The report links to the [developer preview](http://localhost:4327/?progress-report), which adds a small return link. Ordinary app visits have no report overlay.
