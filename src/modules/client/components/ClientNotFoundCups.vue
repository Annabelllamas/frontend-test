<template>
  <main class="mx-auto flex w-full max-w-7xl flex-auto flex-col justify-center px-6 py-24 sm:py-64 lg:px-8">
    <h1 class="mt-4 text-3xl font-bold tracking-tight sm:text-5xl dark:text-white">
      {{ $t('client.notFoundCups') }}
    </h1>
    <p class="mt-6 text-base leading-7 text-gray-600 dark:text-gray-200">
      {{ $t('client.notFoundCupsDescription') }}
    </p>
    <UiEnrolled />
  </main>
</template>
