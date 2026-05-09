import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://owenair.im',
  integrations: [sitemap()],
  trailingSlash: 'never'
});
