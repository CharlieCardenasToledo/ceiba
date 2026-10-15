// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages project site: https://jesusgabri3l.github.io/ceiba/
  site: 'https://jesusgabri3l.github.io',
  base: '/ceiba',
  integrations: [icon()],
  vite: {
    plugins: [tailwindcss()],
    // Generation scratch (clips, run logs) lives here; never reload the page for it.
    server: { watch: { ignored: ['**/video-work/**'] } }
  }
});
