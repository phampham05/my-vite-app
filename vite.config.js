import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Tắt SSR
    ssr: false,
    // Thêm các tùy chọn khác
    commonjsOptions: {
      transformMixedEsModules: true
    },
    rollupOptions: {
      external: ['crypto']
    }
  }
})