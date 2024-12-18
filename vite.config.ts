import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/inez-birthday/',  // Update to match repository name under irfansofyana
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
