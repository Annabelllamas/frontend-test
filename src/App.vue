<template>
  <AppWrapper>
    <AppHeader />
    <div class="grid grow items-center pb-10 sm:px-8 sm:pb-20">
      <RouterView v-slot="{ Component, route }">
        <Suspense>
          <Transition name="fade" mode="out-in">
            <component :is="Component" :key="route.path" />
          </Transition>
          <template #fallback>
            <UiLoading />
          </template>
        </Suspense>
      </RouterView>
    </div>
  </AppWrapper>
</template>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
