import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/raidenprjkts.github.io/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
