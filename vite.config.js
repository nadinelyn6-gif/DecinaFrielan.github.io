import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// `base: './'` keeps asset paths relative, so the built site works on
// GitHub Pages, Netlify, or even when opened from a sub-folder.
export default defineConfig({
  plugins: [react()],
  base: './',
})
