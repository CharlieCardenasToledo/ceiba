// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages project site: https://charliecardenastoledo.github.io/ceiba/
  site: 'https://charliecardenastoledo.github.io',
  base: '/ceiba',
  integrations: [icon()],
  vite: {
    plugins: [tailwindcss()],
    // Generation scratch (clips, run logs) lives here; never reload the page for it.
    server: { watch: { ignored: ['**/video-work/**'] } }
  }
});
