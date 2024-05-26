<template>
  <div class="dark:text-white">
    <h3 class="mb-3 text-2xl font-bold">
      {{ $t('home.form.title') }}
    </h3>
    <p class="text-sm font-light">
      {{ $t('home.form.subtitle') }}
    </p>
    <form class="mt-4 grid gap-4" @submit.prevent="submit">
      <UiFormInput
        v-model="data.cups"
        :label="$t('common.cups')"
        name="cups"
        placeholder="Demo: 123456"
        :error="getError(validator.cups)"
      />
      <UiButton
        type="submit"
        :disabled="validator.$error || !data.cups"
      >
        {{ $t('home.form.button') }}
      </UiButton>
    </form>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()
const { locale } = useI18n()

const { required, cups, getError } = useValidatorUtils()

const data = reactive({
  cups: undefined
})

const rules = computed(() => {
  return {
    cups: {
      required,
      cups
    }
  }
})

const validator = useValidator(data, rules)

const submit = () => {
  if (validator.value.$error) {
    return
  }

  router.push({
    name: 'client',
    params: {
      cups: data.cups,
      locale: locale.value
    }
  })
}
</script>
