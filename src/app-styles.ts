import { css } from 'lit';

export const appStyles = css`
  :host { display: block; min-height: 100svh; --accent: #477a35; --accent-soft: #e8efdf; --muted: #6b7468; }
  * { box-sizing: border-box; }
  .page { --page-gutter: 40px; min-height: 100svh; display: flex; flex-direction: column; padding: 0 var(--page-gutter); }
  header { display: flex; align-items: center; justify-content: space-between; height: 100px; width: 100%; max-width: 1184px; margin: 0 auto; }
  .brand { display: flex; align-items: center; gap: 10px; color: #283325; font-size: 17px; font-weight: 650; letter-spacing: -.65px; }
  .brand-mark { width: 29px; height: 29px; color: #477a35; }
  .sound { color: var(--muted); }
  .sound::part(control) { font-size: 12px; font-weight: 500; gap: 8px; }
  svg.icon { width: 20px; height: 20px; flex-shrink: 0; display: block; }
  main { flex: 1; display: flex; align-items: center; flex-direction: column; justify-content: center; width: 100%; padding: 30px 0 70px; }
  .dial { position: relative; width: min(360px, 84vw); aspect-ratio: 1; display: grid; place-items: center; }
  .dial-svg { position: absolute; inset: 0; width: 100%; height: 100%; overflow: visible; transform: rotate(-90deg); }
  .dial-track { stroke: #e6eadd; }
  .dial-progress { stroke: var(--accent); transition: stroke .3s; }
  .dial-ticks { stroke: #cfd6c7; stroke-width: 1; }
  .dial-content { display: flex; flex-direction: column; align-items: center; z-index: 1; }
  .segment-label { display: flex; align-items: center; gap: 8px; margin: 0 0 12px; font-size: 14px; font-weight: 550; color: var(--accent); max-width: 230px; }
  .segment-label span:last-child { white-space: nowrap; text-overflow: ellipsis; overflow: hidden; }
  .segment-dot { background: currentColor; width: 6px; height: 6px; border-radius: 50%; flex: 0 0 auto; }
  .digits { font-size: clamp(62px, 18vw, 92px); line-height: 1; letter-spacing: -6px; font-weight: 450; font-variant-numeric: tabular-nums; color: #243020; margin-left: -5px; }
  .digits.long { font-size: 66px; }
  .dial-caption { color: var(--muted); font-size: 12px; margin: 18px 0 0; letter-spacing: .1px; }
  .next-slot { block-size: 40px; flex-shrink: 0; display: grid; place-items: center; max-inline-size: 100%; }
  .next { color: var(--muted); margin: 0; font-size: 12px; display: flex; align-items: center; justify-content: center; gap: 7px; min-height: 20px; max-width: min(340px, 100%); }
  .next strong { font-weight: 500; color: #35412f; white-space: nowrap; text-overflow: ellipsis; overflow: hidden; }
  .next .icon { width: 13px; height: 13px; margin-left: 3px; }
  .actions { display: flex; align-items: center; justify-content: center; gap: 15px; min-height: 56px; }
  .primary::part(control) { min-width: 190px; min-height: 54px; font-size: 14px; gap: 10px; font-weight: 550; box-shadow: 0 3px 4px #24302008; }
  .aux::part(control) { color: #687260; min-height: 44px; min-width: 44px; }
  .shortcut { font: inherit; font-size: 10px; line-height: 1; letter-spacing: .2px; white-space: nowrap; padding: 4px 5px; border: 1px solid #ffffff66; border-radius: 4px; color: #fff; background: #0000000a; }
  .sound .shortcut { color: #626c5c; border-color: #c9d2c2; background: transparent; }
  .routine { inline-size: calc(100% + 2 * var(--page-gutter)); margin-top: 43px; }
  .routine-heading { display: flex; align-items: center; justify-content: space-between; gap: 10px; inline-size: min(400px, calc(100% - 2 * var(--page-gutter))); margin: 0 auto 12px; border-top: 1px solid #dfe4d7; padding-top: 19px; }
  .routine h2 { margin: 0; color: var(--muted); font-size: 10px; letter-spacing: 1.6px; font-weight: 600; text-transform: uppercase; }
  .edit::part(control) { font-size: 11px; font-weight: 500; color: #53654a; min-height: 28px; padding: 0 8px; gap: 5px; }
  .edit .icon { width: 12px; height: 12px; }
  .segments { display: flex; flex-wrap: nowrap; gap: 6px; inline-size: max-content; min-inline-size: min(400px, 100%); max-inline-size: 100%; block-size: 64px; padding: 2px 16px 16px; margin: 0 auto; list-style: none; overflow-x: auto; overflow-y: hidden; scrollbar-width: none; overscroll-behavior-inline: contain; scroll-padding-inline: 16px; }
  .segments:focus-visible { outline: 2px solid #477a35; outline-offset: -2px; border-radius: 10px; }
  .segment { min-inline-size: clamp(112px, 30vw, 160px); block-size: 44px; flex: 1 0 auto; display: flex; justify-content: space-between; align-items: center; gap: 8px; padding: 0 14px; border: 1px solid transparent; border-radius: 9px; background: #eef1e8; font-size: 12px; color: #5c6753; }
  .segment[data-active] { border-color: #c5d4b8; color: #355128; background: #e8efdf; }
  .segment.rest { background: #f0eee5; color: #75674b; }
  .segment.rest[data-active] { border-color: #dac99d; background: #f4ebd6; }
  .segment-title { display: flex; align-items: center; gap: 4px; min-inline-size: 0; }
  .segment-name { max-inline-size: 18ch; white-space: nowrap; text-overflow: ellipsis; overflow: hidden; display: block; }
  .segment-delete { position: relative; flex: 0 0 auto; opacity: 0; pointer-events: none; --en-icon-size: 14px; }
  .segment-delete::part(control) { inline-size: 26px; block-size: 26px; min-inline-size: 26px; min-block-size: 26px; padding: 4px; color: inherit; border-color: transparent; border-radius: 5px; }
  .segment:hover .segment-delete, .segment:focus-within .segment-delete { opacity: 1; pointer-events: auto; }
  .segment-delete:hover::part(control) { color: #ae332b; background: #ae332b0d; }
  .segment-duration { font-variant-numeric: tabular-nums; font-weight: 600; flex-shrink: 0; }
  .repeat-note { margin: 12px 0 0; display: flex; justify-content: center; align-items: center; gap: 5px; color: #626c5c; font-size: 10px; }
  .repeat-note .icon { width: 12px; height: 12px; }
  .completed-cycles { font-weight: 600; color: #596650; }
  .resting { --accent: #967330; --accent-soft: #f4ebd6; }
  .resting .primary { --en-color-action: #896b2d; --en-color-action-hover: #725824; --en-color-action-pressed: #5e481d; }
  .audio-notice { color: #806025; font-size: 12px; max-width: 340px; text-align: center; margin: 16px 0 0; }
  .sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0; }
  en-dialog { --en-overlay-background: #f8f9f5; --en-overlay-radius: 22px; }
  en-dialog::part(surface) { width: min(640px, calc(100vw - 32px)); max-inline-size: min(640px, calc(100vw - 32px)); }
  .editor-intro { margin: 0 0 22px; font-size: 13px; line-height: 1.6; color: #626e61; }
  .editor-rows { display: flex; flex-direction: column; gap: 16px; }
  .editor-row { display: grid; grid-template-columns: minmax(100px,1fr) 180px 120px 36px; gap: 10px; align-items: end; padding-bottom: 16px; border-bottom: 1px solid #e1e6db; }
  en-text-field, en-number-field, en-select { min-width: 0; --en-font-label-strong-weight: 500; }
  .remove { align-self: end; }
  .remove::part(control) { min-width: 36px; min-height: 40px; color: #6b7468; }
  .add { margin-top: 17px; }
  .add::part(control) { font-size: 12px; }
  .editor-footer { display: flex; align-items: center; justify-content: flex-end; gap: 9px; width: 100%; }
  .editor-footer en-button::part(control) { font-size: 13px; }
  .error { color: #ae332b; font-size: 13px; line-height: 1.5; margin: 16px 0 0; }
  .cue-notes { font-size: 11px; color: #6b7468; line-height: 1.65; margin: 19px 0 0; }
  .report-link { position: fixed; right: max(16px, env(safe-area-inset-right)); bottom: max(16px, env(safe-area-inset-bottom)); z-index: 100; color: #39592a; background: #f8f9f5; border: 1px solid #cad5bf; border-radius: 24px; padding: 10px 14px; font-size: 11px; text-decoration: none; box-shadow: 0 2px 10px #18201708; }
  .report-link:focus-visible { outline: 2px solid #477a35; outline-offset: 3px; }
  @media (max-width: 600px) {
    .page { --page-gutter: 24px; }
    header { height: 78px; }
    main { padding: 28px 0 45px; }
    .routine { margin-top: 34px; }
    .editor-row { grid-template-columns: minmax(0,1fr) 180px 36px; }
    .editor-row en-select { grid-column: 1 / 3; }
    .editor-row .remove { grid-column: 3; grid-row: 1; }
  }
  @media (max-width: 420px) {
    .editor-row { grid-template-columns: minmax(0,1fr) 36px; gap: 12px; }
    .editor-row en-text-field { grid-column: 1; grid-row: 1; }
    .editor-row .remove { grid-column: 2; grid-row: 1; }
    .editor-row en-number-field { grid-column: 1 / -1; grid-row: 2; }
    .editor-row en-select { grid-column: 1 / -1; grid-row: 3; }
  }
  @media (max-width: 360px) {
    .page { --page-gutter: 16px; }
    .brand { font-size: 15px; }
    .actions { gap: 7px; }
    .primary::part(control) { min-width: 166px; }
  }
  @media (min-height: 620px) and (max-height: 950px) {
    header { height: 76px; }
    main { padding-top: 12px; padding-bottom: 28px; }
    .dial { width: min(310px, 84vw); }
    .routine { margin-top: 26px; }
  }
  @media (pointer: coarse) { .shortcut { display: none; } }
  @media (hover: none) {
    .segment-delete { opacity: 1; pointer-events: auto; }
    .segment-delete::part(control) { inline-size: 44px; block-size: 44px; min-inline-size: 44px; min-block-size: 44px; }
  }
  @media (prefers-reduced-motion: reduce) { * { transition: none !important; } }
`;
