<template>
  <div class="flex flex-col gap-2">
    <label v-if="label" :for="name" class="text-sm font-bold">{{ label }}</label>
    <input
      :id="name"
      v-model="model"
      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
      :required="required"
      :aria-describedby="`${name}-help`"
      :placeholder="placeholder"
      type="text"
      :invalid="!!error"
    >
    <small
      v-if="error"
      :id="`${name}-help`"
      class="text-red-500"
    >
      {{ error }}
    </small>
  </div>
</template>

<script lang="ts" setup>
const model = defineModel({
  type: String
})

defineProps({
  type: {
    type: String as PropType<'text'>,
    default: 'text'
  },
  name: {
    type: String,
    required: true
  },
  required: {
    type: Boolean,
    default: false
  },
  label: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    default: null
  },
  error: {
    type: String,
    default: null
  }
})
</script>
