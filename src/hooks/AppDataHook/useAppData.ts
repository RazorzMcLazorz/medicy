import type { AppDataHook, AppDataContextState, AppDataHelpers } from './types'
import useAppDataDispatchHook from './useAppDataDispatchHook'
import { useAppDataContext } from './AppDataContext'
import { tileSelector } from './utils'
import { MapDetails } from './types'

export default function useAppData(): AppDataHook {
  const helpers = useAppDataDispatchHook()
  const state = useAppDataContext()
  const { setOnlineStatus } = helpers

  const checkOnlineStatus = (): void => setOnlineStatus(window.navigator.onLine)

  const handleIntialMapGeneration = (mapSize: number): MapDetails[][] => {
    let emptyMap: any[] = []
    const mapSizeArr = new Array(mapSize)

    mapSizeArr.forEach(() => {
      let mapDetails: any[] = []

      mapSizeArr.forEach(() => {
        mapDetails.push({
          terrain: tileSelector(),
          unit: 0,
          building: 0,
        })
      })

      emptyMap.push(mapDetails)
    })

    return emptyMap
  }

  const hookState: AppDataContextState = { ...state }

  const hookHelpers: AppDataHelpers = { ...helpers, checkOnlineStatus, handleIntialMapGeneration }

  return [hookState, hookHelpers]
}
