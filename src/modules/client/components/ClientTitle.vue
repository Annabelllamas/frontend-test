<template>
  <h1 class="mb-4 text-pretty text-2xl font-bold md:text-5xl">
    {{ $t('client.data.welcomeMessage') }}
    <span class="text-primary">{{ name }}</span>.
  </h1>
</template>

<script lang="ts" setup>
defineProps({
  name: {
    type: String,
    required: true
  }
})
</script>
