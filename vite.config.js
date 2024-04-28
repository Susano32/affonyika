import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  build: {
    inject: true
  },
  plugins: [
    ViteImageOptimizer({
      dir: 'public/assets',
      outDir: 'dist/assets',
      png: {
        quality: 80,
      },
      jpeg: {
        quality: 80,
      },
      jpg: {
        quality: 80,
      },
    })
  ],
});