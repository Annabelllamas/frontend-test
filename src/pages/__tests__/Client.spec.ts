import { screen, fireEvent } from '@testing-library/vue'

import { render, mockUseRoute, SuspenseWrap, mockPush } from '@tests/utils/unit'
import { flushPromises } from '@vue/test-utils'
import ClientComponent from '@/pages/Client.vue'
import mockClients from '@/../public/data/clients.json'
import mockSupplyPoints from '@/../public/data/supply-points.json'
import type { Client } from '@/modules/client/types/client'

vi.mock('@/modules/client/composables/useClient', async () => {
  const originalModule = await vi.importActual('@/modules/client/composables/useClient') as any

  return {
    useClient: vi.fn(() => ({
      ...originalModule.useClient(),
      find: vi.fn((value: string) => mockClients.find((client: Client) => client.cups === value))
    }))
  }
})

vi.mock('@/modules/client/composables/useSupplyPoints', async () => {
  const originalModule = await vi.importActual('@/modules/client/composables/useSupplyPoints') as any

  return {
    useSupplyPoints: vi.fn(() => ({
      ...originalModule.useSupplyPoints(),
      get: () => mockSupplyPoints
    }))
  }
})

describe('Homepage Form', () => {
  beforeEach(() => {
    mockUseRoute.mockReset()
  })

  it('shows a standard offer', async () => {
    mockUseRoute.mockReturnValue({
      params: {
        cups: '123456'
      }
    })

    render(SuspenseWrap(ClientComponent))
    await flushPromises()
    await screen.findByText('Terry Evans')
    await screen.findByText('client.discountOffer.hasDiscount')
    await screen.findByText('client.discountOffer.requestDiscount')
  })

  it('submits the form successfully', async () => {
    mockUseRoute.mockReturnValue({
      params: {
        cups: '123456'
      }
    })

    render(SuspenseWrap(ClientComponent))
    await flushPromises()
    const button = await screen.getByRole('button', { name: 'client.discountOffer.requestDiscount' })
    await fireEvent.click(button)
    expect(mockPush).toHaveBeenCalledWith({ name: 'thanks', params: { locale: 'en' } })
  })
})
