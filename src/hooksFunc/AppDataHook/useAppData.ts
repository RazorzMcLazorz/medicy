import type { AppDataHook, AppDataContextState, AppDataHelpers } from './types'
import useAppDataDispatchHook from './useAppDataDispatchHook'
import { useAppDataContext } from './AppDataContext'
import { checkDataBase } from './utils'

export default function useAppData(): AppDataHook {
  const helpers = useAppDataDispatchHook()
  const state = useAppDataContext()
  const { setIsDataBaseLive } = helpers

  const checkDataBaseServiceIsLive = (): void => {
    checkDataBase().then((isServerLive) => {
      console.log(isServerLive)
      setIsDataBaseLive(isServerLive)
    })
  }

  const hookState: AppDataContextState = { ...state }

  const hookHelpers: AppDataHelpers = { ...helpers, checkDataBaseServiceIsLive }

  return [hookState, hookHelpers]
}
