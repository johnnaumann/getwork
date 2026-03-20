import { defineConfig } from 'vite';
import { prerenderAppPlugin } from './vite-plugin-prerender-app.mjs';

export default defineConfig({
  root: '.',
  base: '/getwork/',
  plugins: [prerenderAppPlugin()],
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
});

