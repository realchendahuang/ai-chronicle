import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

export default defineConfig({
  server: { port: 3000 },
  resolve: {
    alias: {
      '~': path.resolve(import.meta.dirname, 'src'),
    },
  },
  css: {
    devSourcemap: true,
  },
  ssr: {
    noExternal: ['@tanstack/react-start', '@tanstack/react-router'],
  },
  plugins: [
    tailwindcss(),
    tanstackStart({
      prerender: {
        enabled: true,
        failOnError: true,
        autoSubfolderIndex: true,
        concurrency: 1,
        retryCount: 0,
        routes: ['/', '/companies'],
      },
    }),
    viteReact(),
  ],
})
