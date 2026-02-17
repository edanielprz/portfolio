import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://edanielprz.info',
  base: '/',
  build: {
    format: 'file',
  },
});
