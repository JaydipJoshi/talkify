import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'react-router', 'zustand'],
          'socket': ['socket.io-client'],
          'ui': ['react-hot-toast', 'lucide-react'],
          'http': ['axios'],
        }
      }
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      }
    },
    chunkSizeWarningLimit: 1000,
    sourcemap: false,
  },
  server: {
    middlewareMode: false,
    hmr: {
      host: 'localhost',
      port: 5173,
    }
  }
})