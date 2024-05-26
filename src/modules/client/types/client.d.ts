export type Client = {
  full_name: string
  address: string
  cups: string
  role: string
  building_type: string
}

export type SupplyPoint = {
  cups: string
  tariff: string
  invoiced_amount: string
  power: {
    p1: string
    p2: string
  }
  neighbors: string[]
}

export type ClientOfferTypes = 'not-offer' | 'standard-offer' | 'basic-discount' | 'special-discount'
export type ClientOffers = Record<ClientOfferTypes, number>