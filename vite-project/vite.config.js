import {
  defineConfig
} from 'vite'
import path from 'path';
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import {
  viteMockServe
} from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig({
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
  }
})