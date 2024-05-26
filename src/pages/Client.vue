<template>
  <main v-if="client && clientSupplyPoint" class="dark:text-white">
    <ClientNotOffer
      v-if="offer=== 'not-offer'"
      :client="client"
      :type="client.building_type"
      :neightbors="clientSupplyPoint.neighbors.length"
    />
    <template
      v-else-if="offer"
    >
      <ClientTitle :name="client.full_name" />
      <div class="mt-8 grid gap-6 md:mt-16 md:grid-cols-2">
        <ClientDiscountOffer :offer="offer" class="md:order-last" @submit="submit" />
        <ClientData
          :client="client"
          :supply-point="clientSupplyPoint"
        />
      </div>
    </template>
  </main>
  <div v-else>
    <ClientNotFoundCups />
  </div>
</template>

<script lang="ts" setup>
import type { ClientOfferTypes } from '@/modules/client/types/client'

const route = useRoute()
const router = useRouter()
const { locale } = useI18n()

const cups = route.params.cups as string

const _client = useClient()
const _supplyPoints = useSupplyPoints()

const client = await _client.find(cups)
const supplyPoints = await _supplyPoints.get()

const clientSupplyPoint = supplyPoints?.find(point => point.cups === cups)
const neighbors = supplyPoints?.filter(point => clientSupplyPoint?.neighbors.includes(point.cups))

const offer = computed<ClientOfferTypes | undefined>(() => {
  if (!clientSupplyPoint || !client) {
    return
  }

  if (!neighbors?.length || client.building_type !== 'house') {
    return 'not-offer'
  }

  const neighborsInvoicedAmount = _supplyPoints.getNeighborsInvoicedAmount(neighbors)

  if (neighborsInvoicedAmount > _supplyPoints.MINIMUM_AMOUT_SPECIAL_DISCOUNT) {
    return 'special-discount'
  }

  return _supplyPoints.hasNeighborsWithHigherPower(
    clientSupplyPoint, neighbors
  )
    ? 'standard-offer'
    : 'basic-discount'
})

const submit = () => {
  router.push({
    name: 'thanks',
    params: {
      locale: locale.value
    }
  })
}
</script>
