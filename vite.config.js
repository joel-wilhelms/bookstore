import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://joel-wilhelms.github.io/firebasebookstore/',
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
  } 
})
