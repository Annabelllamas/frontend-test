<template>
  <div>
    <h2 class="text-lg font-bold md:text-2xl">
      {{ $t('client.data.supplyPointHeader') }}
    </h2>
    <div class="grid grid-cols-2 gap-2 py-6">
      <ClientDataItem :title="$t('client.data.address')">
        <p>{{ client.address }}</p>
      </ClientDataItem>
      <ClientDataItem :title="$t('client.data.cups')">
        <p>{{ client.cups }}</p>
      </ClientDataItem>
      <ClientDataItem :title="$t('client.data.tariff')">
        <p>{{ supplyPoint.tariff }}</p>
      </ClientDataItem>
      <ClientDataItem :title="$t('client.data.contractedPower')">
        <div class="flex gap-2">
          <p
            v-for="(power, index) in supplyPoint.power"
            :key="index"
            class="rounded-md text-xs drop-shadow-sm"
            :class="`${index === 'p1' ? 'text-orange-500' : 'text-red-500' }`"
          >
            {{ `${index.toUpperCase()} ${power}W` }}
          </p>
        </div>
      </ClientDataItem>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Client, SupplyPoint } from '@/modules/client/types/client'

defineProps({
  client: {
    type: Object as PropType<Client>,
    required: true
  },
  supplyPoint: {
    type: Object as PropType<SupplyPoint>,
    required: true
  }
})
</script>
