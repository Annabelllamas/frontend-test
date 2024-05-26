<template>
  <header class="flex w-full items-baseline py-6">
    <RouterLink :to="{name: 'home', params: { locale }}" class="ml-auto">
      <AppLogo />
    </RouterLink>
    <AppActions class="ml-auto" />
  </header>
</template>

<script setup lang="ts">
const { locale } = useI18n()
</script>
