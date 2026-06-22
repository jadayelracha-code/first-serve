// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://first-serve.net',
  integrations: [
    tailwind({
      // We provide our own base styles in src/styles/global.css
      applyBaseStyles: false,
    }),
  ],
});
