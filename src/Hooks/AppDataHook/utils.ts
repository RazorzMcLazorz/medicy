import { DATA_BASE_URL } from '../../constants'

export const checkDataBase = (): Promise<boolean> => {
  return fetch(`${DATA_BASE_URL}/`)
    .then((res) => res.ok)
    .catch((res) => {
      console.log(res)
      return res.ok
    })
}
