import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves the repo root of `main`, so the source lives in src/
// and the build is written to the root (index.html, assets/, CNAME, ...).
// Run `npm run build` and commit the output before pushing.
export default defineConfig({
  root: 'src',
  publicDir: '../public',
  plugins: [react()],
  base: '/',
  build: {
    outDir: '..',
    emptyOutDir: false,
  },
})
