import { defineConfig } from 'vite';

export default defineConfig({
  resolve: { dedupe: ['lit', 'lit-html', 'lit-element', '@lit/reactive-element', 'signal-polyfill', 'signal-utils'] },
});
