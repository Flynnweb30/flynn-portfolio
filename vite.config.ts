import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      // Route-level lazy loading keeps the initial bundle small. This threshold
      // is a guardrail for genuinely large chunks, not a blanket warning bypass.
      chunkSizeWarningLimit: 700,
      rollupOptions: {
        output: {
          manualChunks: {
            react: ['react', 'react-dom'],
            motion: ['framer-motion'],
            icons: ['lucide-react'],
          },
        },
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
