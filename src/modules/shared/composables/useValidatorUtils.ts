import type { ErrorObject, Validation, ValidationArgs } from '@vuelidate/core'

import {
  createI18nMessage,
  helpers,
  required
} from '@vuelidate/validators'

export const useValidatorUtils = () => {
  const i18n = useI18n()
  const withI18nMessage = createI18nMessage({ t: i18n.t.bind(i18n) })

  const getError = (entity: Validation<ValidationArgs<unknown>, any>) => {
    return entity?.$errors[0]?.$message as string
  }

  const getErrors = (entity: Validation<ValidationArgs<unknown>, any>) => {
    return entity?.$errors as ErrorObject[]
  }

  return {
    getError,
    getErrors,
    required: withI18nMessage(required),
    cups: withI18nMessage(helpers.regex(/^[0-9]{6}$/))
  }
}
