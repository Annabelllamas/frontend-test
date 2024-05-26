const isDarkMode = ref(false)

export function useDarkMode () {
  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value
  }

  return {
    isDarkMode,
    toggleDarkMode
  }
}
