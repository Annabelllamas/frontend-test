<template>
  <div
    :class="isDarkMode ? nightClasses : dayClasses"
    class="grid min-h-screen bg-gradient-to-br via-secondary to-alternative bg-size-200 p-4 sm:p-8"
  >
    <div class="container mx-auto flex max-w-6xl flex-col rounded bg-white p-8 shadow-xl dark:bg-slate-800">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const dayClasses = 'bg-pos-100 via-70% from-primary'
const nightClasses = 'dark bg-pos-0 from-slate-900 via-90%'

const { isDarkMode } = useDarkMode()
</script>

<style>
body * {
  transition-property: background-color, color, fill, stroke, opacity, box-shadow, border-color, background, color, fill, stroke, opacity, box-shadow, border-color;
  transition-timing-function: ease-out;
  transition-duration: 250ms;
}
</style>
