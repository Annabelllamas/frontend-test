<template>
  <div class="flex items-center justify-between">
    <Transition name="fade" mode="out-in" @click="toggleDarkMode">
      <IconSun v-if="isDarkMode" class="text-white" />
      <IconMoon v-else />
    </Transition>
  </div>
</template>

<script setup lang="ts">
const { toggleDarkMode, isDarkMode } = useDarkMode()
</script>
