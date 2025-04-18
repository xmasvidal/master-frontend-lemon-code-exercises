import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'https://rickandmortyapi.com/',
      '/thumbnails': 'http://localhost:3000',
      '/graphql': 'https://rickandmortyapi.com'
    },
  },
});
