<template>
  <div>
    <h2 class="text-lg font-bold md:text-2xl">
      {{ $t('client.data.supplyPointHeader') }}
    </h2>
    <div class="mt-4">
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
        <p>{{ $t('client.data.p1') }}: {{ supplyPoint.power.p1 }}W</p>
        <p>{{ $t('client.data.p2') }}: {{ supplyPoint.power.p2 }}W</p>
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
