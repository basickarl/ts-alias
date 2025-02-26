import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import type { UserConfig } from 'vite';

export default {
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@Testy': resolve(__dirname, './src/components/testy'),
    },
  },
  server: {
    port: 8000,
  },
  root: 'src',
  build: {
    outDir: '../public',
  },
} satisfies UserConfig;
