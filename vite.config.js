import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Thêm định nghĩa global để tránh lỗi crypto
      define: {
        'global': {},
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }
  }
})