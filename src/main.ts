import '@/assets/css/main.css'

import App from '@/App.vue'

import { setupRouter } from '@/router'
import { setupI18n, DEFAULT_LOCALE } from '@/i18n'

import es from '@/locales/es.json'

const i18n = setupI18n({
  legacy: false,
  locale: DEFAULT_LOCALE,
  fallbackLocale: DEFAULT_LOCALE,
  messages: {
    es
  }
})

const app = createApp(App)
const router = setupRouter(i18n)

app.use(i18n)
app.use(router)

app.mount('#app')
