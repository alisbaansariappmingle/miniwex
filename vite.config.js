import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  server: {
    allowedHosts: ['4c5b-110-235-239-183.ngrok-free.app'], // Allow this host
  },
})