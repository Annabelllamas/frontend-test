import type { SupplyPoint } from '@/modules/client/types/client'

export const useSupplyPoints = () => {
  const MINIMUM_AMOUT_SPECIAL_DISCOUNT = 100

  const get = () => {
    const api = useApi()
    return api.get<SupplyPoint[]>('/data/supply-points.json')
  }

  const hasNeighborsWithHigherPower = (client: SupplyPoint, neighbors: SupplyPoint[]) => neighbors.some((neighbor) => {
    return neighbor.power.p1 > client.power.p1 || neighbor.power.p2 > client.power.p2
  })

  const getNeighborsInvoicedAmount = (neighbors: SupplyPoint[]) => neighbors.reduce((acc, neighbor) => {
    acc += Number(neighbor.invoiced_amount)
    return acc
  }, 0)

  return {
    get,
    hasNeighborsWithHigherPower,
    getNeighborsInvoicedAmount,
    MINIMUM_AMOUT_SPECIAL_DISCOUNT
  }
}
