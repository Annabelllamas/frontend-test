<template>
  <header class="mb-12 flex w-full items-baseline">
    <RouterLink :to="{name: 'home', params: { locale }}" class="ml-auto">
      <AppLogo />
    </RouterLink>
    <AppActions class="ml-auto" />
  </header>
</template>

<script setup lang="ts">
const { locale } = useI18n()
</script>
