export const useApi = () => {
  const get = async <T>(url: string): Promise<T> => {
    const response = await fetch(url)
    await sleep(200)
    return response.json()
  }

  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

  return {
    get
  }
}
