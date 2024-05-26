<template>
  <div>
    <h2 class="mb-4 text-balance text-3xl font-bold">
      <template v-if="offerTypes[offer]">
        {{ $t('client.discountOffer.hasDiscountWithPercentage') }}
        <span class="text-primary">{{ $t(`client.discountOffer.${offer}`) }}</span>
        {{ $t('client.discountOffer.percentage', {percentage: offerTypes[offer] }) }}
      </template>
      <template v-else>
        {{ $t('client.discountOffer.hasDiscount') }}
        <span class="text-primary">{{ $t(`client.discountOffer.${offer}`) }}</span>
      </template>
    </h2>
    <p class="mb-4 text-lg">
      {{ $t('client.discountOffer.stepAway') }}
    </p>
    <UiButton rounded raised @click="submit">
      {{ $t('client.discountOffer.requestDiscount') }}
    </UiButton>
  </div>
</template>

<script setup lang="ts">
import type { ClientOfferTypes } from '@/modules/client/types/client'
const offerTypes = useClient().offerTypes

defineProps({
  offer: {
    type: String as PropType<ClientOfferTypes>,
    required: true
  }
})
const emit = defineEmits(['submit'])

const submit = () => {
  emit('submit')
}
</script>
