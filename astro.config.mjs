import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://edanielprz.github.io',
  base: '/portfolio/',
  build: {
    format: 'file'
  }
});
