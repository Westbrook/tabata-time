import { svg, html } from 'lit';

const paths = {
  play: svg`<path d="m9 5 11 7-11 7Z" fill="currentColor" stroke="none"/>`,
  pause: svg`<path d="M8 5v14M16 5v14" stroke-width="3"/>`,
  reset: svg`<path d="M3 10a9 9 0 1 1 1 7M3 4v6h6"/>`,
  skip: svg`<path d="m5 5 10 7-10 7ZM19 5v14"/>`,
  sound: svg`<path d="m11 4-6 5H2v6h3l6 5ZM16 8a6 6 0 0 1 0 8m3-11a10 10 0 0 1 0 14"/>`,
  mute: svg`<path d="m11 4-6 5H2v6h3l6 5Zm5 5 6 6m0-6-6 6"/>`,
  edit: svg`<path d="m15 4 5 5M4 20l5-1L21 7a2 2 0 0 0-4-4L5 15Z"/>`,
  arrow: svg`<path d="M4 12h16m-5-5 5 5-5 5"/>`,
  repeat: svg`<path d="m16 2 4 4-4 4M4 10V9a3 3 0 0 1 3-3h13M8 22l-4-4 4-4m12 0v1a3 3 0 0 1-3 3H4"/>`,
};
export function icon(name: keyof typeof paths, slot?: string) {
  const image = svg`<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name]}</svg>`;
  return slot ? html`<span slot=${slot}>${image}</span>` : image;
}
