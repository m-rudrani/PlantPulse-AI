import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,  // Run on 5173
    strictPort: true, // Prevent it from switching to another port
    host: true, // Allows local network access
  },
});
