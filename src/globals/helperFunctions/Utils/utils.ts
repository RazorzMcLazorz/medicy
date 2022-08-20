export const setLocalStorage = (item: string, value: any): void =>
  localStorage.setItem(item, JSON.stringify(value))

export const getLocalStorage = (item: string): any => {
  const val = localStorage.getItem(item)
  if (val) return JSON.parse(val)
  return undefined
}
