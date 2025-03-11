import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  server: {
    allowedHosts: ['f846-2401-4900-1c5a-b31a-ccbd-bdb3-d311-26d7.ngrok-free.app'], // Allow this host
  },
})