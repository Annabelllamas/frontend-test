import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Component from 'unplugin-vue-components/vite'

export default defineConfig({
  plugins: [
    vue(),
    Component({
      dts: './.config/auto-components.d.ts',
      dirs: [
        'src/**', 'dist/**'
      ],
      types: [{
        from: 'vue-router',
        names: ['RouterLink', 'RouterView', 'Suspense']
      }]
    }),
    AutoImport({
      dts: './.config/auto-imports.d.ts',
      imports: [
        'vue',
        'vue-router',
        'vue-i18n'
      ],
      dirs: [
        'src/**'
      ]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
