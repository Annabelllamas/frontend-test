import { useVuelidate } from '@vuelidate/core'
import type { GlobalConfig, ValidationArgs } from '@vuelidate/core'

export const useValidator = (data: any, rules: ValidationArgs, options: GlobalConfig = {}) => {
  const defaultOptions: GlobalConfig = {
    $lazy: false,
    $scope: false,
    $autoDirty: true
  }

  return useVuelidate(rules, data, { ...defaultOptions, ...options })
}
