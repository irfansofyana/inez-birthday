import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
    assetsDir: 'assets',
  },
  publicDir: 'public',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  assetsInclude: ['**/*.mp3'],
});
