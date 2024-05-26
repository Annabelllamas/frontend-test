<template>
  <div>
    <div class="flex h-full flex-col items-center justify-center space-y-4 dark:text-white">
      <h1 class="text-balance text-3xl font-bold">
        {{ $t('thanks.title') }}
      </h1>
      <p class="text-lg">
        {{ $t('thanks.subtitle') }}
      </p>
    </div>
    <RouterLink :to="{name: 'home', params: { locale }}" class="text-sm font-semibold leading-7 text-primary">
      <span aria-hidden="true">&larr; </span>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()
</script>
