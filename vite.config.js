import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { crx } from '@crxjs/vite-plugin';
import manifest from './manifest.json' with { type: 'json' };

export default defineConfig(({ mode }) => ({
  plugins: [react(), crx({ manifest })],
  build: {
    emptyOutDir: true,
    outDir: 'dist',
    rollupOptions: {
      input: {
        popup: 'src/popup/index.html'
      },
    },
  },
//   server: {
//     port: 5173,
//     strictPort: true,
//     hmr: {
//       port: 5173
//     }
//   }
}));

