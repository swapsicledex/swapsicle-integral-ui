import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@cryptoalgebra/integral-sdk": path.resolve(__dirname, "node_modules/@swapsicledex/integral-sdk")
    }
  }
})
