import {
  defineConfig
} from 'vite'
import path from 'path';
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import {
  viteMockServe
} from 'vite-plugin-mock'
const baseURL = "http://127.0.0.1:8081"
// https://vitejs.dev/config/
export default defineConfig({
  base:'./',
  plugins: [vue(), vueJsx(), viteMockServe({
    supportTs: false
  })],
  css: {
    preprocessorOptions: {

    }
  },
  esbuild: {

  },
  alias: {
    '@': path.resolve(__dirname, 'src'),
  },
  server:{
    proxy:{
      '/api': {
        target: baseURL,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api'),
      },
      '/upload':{
        target: baseURL,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/upload/, '/upload'),
      }
    }
  }
})