import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/v1": "https://moodspace-server.vercel.app/",
    },
  },
  define: {
    __APP_ENV__: process.env.VITE_API_FETCH,
  },
  css: {
    postcss: {
      plugins: [],
    },
  },
  plugins: [react()],
})
