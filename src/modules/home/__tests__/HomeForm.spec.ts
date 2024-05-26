import { screen, fireEvent } from '@testing-library/vue'
import { render, mockPush } from '@tests/utils/unit'
import HomeForm from '@/modules/home/HomeForm.vue'

describe('Homepage Form', () => {
  beforeEach(() => {
    render(HomeForm)
  })

  it('finds an input field by its label', () => {
    const input = screen.getByLabelText('common.cups')
    expect(input).toBeInTheDocument()
  })

  it('verifies that the form submit button is initially disabled', () => {
    const button = screen.getByRole('button', { name: 'home.form.button' })
    expect(button).toBeDisabled()
  })

  it('enables the submit button when a valid input is provided', async () => {
    const validInput = '123456'
    const input = screen.getByLabelText('common.cups')
    const button = screen.getByRole('button', { name: 'home.form.button' })
    await fireEvent.update(input, validInput)
    expect(button).toBeEnabled()
  })

  it('disables the submit button and shows an error for invalid input', async () => {
    const invalidInput = 'invalid input'
    const input = screen.getByLabelText('common.cups')
    const button = screen.getByRole('button', { name: 'home.form.button' })
    await fireEvent.update(input, invalidInput)
    const errorText = screen.getByText((_content, element) => element?.id === input.getAttribute('aria-describedby'))
    expect(errorText).toHaveTextContent('validations.cups')
    expect(button).toBeDisabled()
  })

  it('displays a required field message if input is cleared after being valid', async () => {
    const userInput = '123456'
    const input = screen.getByLabelText('common.cups')
    const button = screen.getByRole('button', { name: 'home.form.button' })
    await fireEvent.update(input, userInput)
    await fireEvent.update(input, '')
    const requiredMessage = screen.getByText((_content, element) => element?.id === input.getAttribute('aria-describedby'))
    expect(requiredMessage).toHaveTextContent('validations.required')
    expect(button).toBeDisabled()
  })

  it('submits the form successfully with valid input', async () => {
    const userInput = '123456'
    const input = screen.getByLabelText('common.cups')
    const button = screen.getByRole('button', { name: 'home.form.button' })

    await fireEvent.update(input, userInput)
    await fireEvent.click(button)

    expect(mockPush).toHaveBeenCalledWith({ name: 'client', params: { cups: userInput, locale: 'en' } })
  })
})
