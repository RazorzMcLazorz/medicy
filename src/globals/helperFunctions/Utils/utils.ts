export const setLocalStorage = (item: string, value: any): void =>
  localStorage.setItem(item, JSON.stringify(value))

export const removeLocalStorage = (item: string): void => localStorage.removeItem(item)

export const getLocalStorage = (item: string): any => {
  const val = localStorage.getItem(item)
  if (val) return JSON.parse(val)
  return undefined
}

export const capitalizeFirstLetter = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)
