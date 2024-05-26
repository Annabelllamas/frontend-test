import '@testing-library/jest-dom'
import { render as renderComponent } from '@testing-library/vue'
import { Suspense } from 'vue'
import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages: {}
})

export const mockUseRoute = vi.fn()
export const mockPush = vi.fn()

vi.mock('vue-router', () => ({
  useRoute: mockUseRoute,
  useRouter: vi.fn(() => ({
    push: mockPush
  }))
}))

export const render = (component: any, mocks?: any) => {
  return renderComponent(component, {
    global: {
      plugins: [i18n],
      mocks: {
        $t: (msg: string) => msg,
        ...mocks
      }
    }
  })
}

export function SuspenseWrap (
  component: ReturnType<typeof defineComponent>,
  props: Object = {}
) {
  return defineComponent({
    render () {
      return h('div', { id: 'root' },
        h(Suspense, null, {
          default () {
            return h(component, props)
          },
          fallback: h('div', 'fallback')
        })
      )
    }
  })
}
