<template>
  <div>
    <h3 class="text-2xl font-bold">
      {{ $t('client.clientNotOffer.apology', { name: client.full_name }) }}<br>
    </h3>
    <p v-if="client.building_type !== 'house'">
      {{ $t('client.clientNotOffer.offerHousesOnly') }}
    </p>
    <p v-else-if="neightbors === 0">
      {{ $t('client.clientNotOffer.advantageNoNeighbors') }}
    </p>
    <p v-else>
      {{ $t('client.clientNotOffer.noOffer') }}
    </p>
    <UiEnrolled />
  </div>
</template>

<script lang="ts" setup>
import type { Client } from '@/modules/client/types/client'

defineProps({
  client: {
    type: Object as PropType<Client>,
    required: true
  },
  neightbors: {
    type: Number,
    required: true
  }
})
</script>
