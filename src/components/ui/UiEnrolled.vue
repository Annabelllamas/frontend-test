<template>
  <div class="mt-10">
    <RouterLink :to="{name: 'home', params: { locale }}" class="text-sm font-semibold leading-7 text-primary">
      <span aria-hidden="true">&larr; </span>{{ $t('client.enrolled') }}
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()
</script>
