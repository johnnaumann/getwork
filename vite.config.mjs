import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  base: '/getwork/',
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
});

