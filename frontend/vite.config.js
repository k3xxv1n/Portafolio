import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), Tailwindcss()],
  server: {
    port: 3000,
  },
})
