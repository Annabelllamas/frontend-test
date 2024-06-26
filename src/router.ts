import { createRouter, createWebHistory } from 'vue-router'

import type { Router, RouteRecordRaw } from 'vue-router'
import type { I18n } from 'vue-i18n'

import {
  getLocale,
  setI18nLanguage,
  loadLocaleMessages,
  SUPPORT_LOCALES
} from '@/i18n'

import Home from '@/pages/Home.vue'
import Client from '@/pages/Client.vue'
import Thanks from '@/pages/Thanks.vue'

export function setupRouter (i18n: I18n): Router {
  const locale = getLocale(i18n)

  const routes: RouteRecordRaw[] = [
    {
      path: '/:locale',
      name: 'home',
      component: Home
    },
    {
      path: '/:locale/client/:cups',
      name: 'client',
      component: Client
    },
    {
      path: '/:locale/thanks',
      name: 'thanks',
      component: Thanks
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: () => `/${locale}`
    }
  ]

  const router = createRouter({
    history: createWebHistory(),
    routes
  })

  router.beforeEach(async (to) => {
    const paramsLocale = to.params.locale as string

    if (!SUPPORT_LOCALES.includes(paramsLocale)) {
      return `/${locale}`
    }

    if (!i18n.global.availableLocales.includes(paramsLocale)) {
      await loadLocaleMessages(i18n, paramsLocale)
    }

    setI18nLanguage(i18n, paramsLocale)
  })

  return router
}
