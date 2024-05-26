import type { Client, ClientOffers } from '@/modules/client/types/client'

export const useClient = () => {
  const offerTypes: ClientOffers = {
    'not-offer': 0,
    'standard-offer': 0,
    'basic-discount': 5,
    'special-discount': 12
  }

  const find = async (cups: string) => {
    const api = useApi()
    const clients = await api.get<Client[]>('/data/clients.json')
    return clients?.find(client => client.cups === cups)
  }

  return {
    find,
    offerTypes
  }
}
