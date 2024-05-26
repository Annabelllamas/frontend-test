<template>
  <div class="flex items-baseline justify-between gap-2">
    <LanguageSwitch :class="{'text-white': isDarkMode}" />
    <Transition name="fade" mode="out-in" class="cursor-pointer" @click="toggleDarkMode">
      <IconSun v-if="isDarkMode" class="text-white" />
      <IconMoon v-else />
    </Transition>
  </div>
</template>

<script setup lang="ts">
const { toggleDarkMode, isDarkMode } = useDarkMode()
</script>
