import type { AppDataHook, AppDataContextState, AppDataHelpers } from './types'
import useAppDataDispatchHook from './useAppDataDispatchHook'
import { useAppDataContext } from './AppDataContext'

export default function useAppData(): AppDataHook {
  const helpers = useAppDataDispatchHook()
  const state = useAppDataContext()
  const { setOnlineStatus } = helpers

  const checkOnlineStatus = (): void => setOnlineStatus(window.navigator.onLine)

  const hookState: AppDataContextState = { ...state }

  const hookHelpers: AppDataHelpers = { ...helpers, checkOnlineStatus }

  return [hookState, hookHelpers]
}
