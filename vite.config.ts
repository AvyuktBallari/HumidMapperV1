import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    allowedHosts: ['fe74d71b-59d2-413c-ab5f-2d4d62bcae2b-00-1ffm3bqd6nl0m.picard.replit.dev'],
}
})
