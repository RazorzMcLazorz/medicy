import type { AppDataHook, AppDataContextState, AppDataHelpers } from './types'
import useAppDataDispatchHook from './useAppDataDispatchHook'
import { useAppDataContext } from './AppDataContext'
import { checkDataBase } from './utils'

export default function useAppData(): AppDataHook {
  const helpers = useAppDataDispatchHook()
  const state = useAppDataContext()
  const { setIsDataBaseLive, setOnlineStatus } = helpers

  const checkDataBaseServiceIsLive = (): void => {
    checkDataBase().then((isServerLive) => {
      setIsDataBaseLive(isServerLive)
    })
  }

  const checkOnlineStatus = (): void => setOnlineStatus(window.navigator.onLine)

  const hookState: AppDataContextState = { ...state }

  const hookHelpers: AppDataHelpers = { ...helpers, checkDataBaseServiceIsLive, checkOnlineStatus }

  return [hookState, hookHelpers]
}
