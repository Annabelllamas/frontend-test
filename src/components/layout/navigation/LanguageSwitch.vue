<template>
  <button class="flex items-baseline" @click="switchLocale()">
    <span class="sr-only">language Switch</span>
    <IconLanguage class="size-4 md:size-6" />
  </button>
</template>

<script lang="ts" setup>
const route = useRoute()
const router = useRouter()
const { locale } = useI18n()

const switchLocale = () => {
  const newLocale = locale.value === 'es' ? 'en' : 'es'
  locale.value = newLocale

  const newPath = route.path.replace(/^\/(en|es)/, `/${newLocale}`)

  router.push({
    path: newPath,
    query: route.query
  })
}

</script>
