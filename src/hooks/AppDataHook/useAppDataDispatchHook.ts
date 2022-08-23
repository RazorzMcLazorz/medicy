import { useAppDataDispatch } from './AppDataContext'
import actions from './appDataActions'
import type { AppDataContextHelpers } from './types'
import type { ContextHelperFunction } from '../types'

export default function useAppDataDispatchHook(): AppDataContextHelpers {
  const appDataDispatch = useAppDataDispatch()

  const setIsDataBaseLive: ContextHelperFunction = (value) =>
    appDataDispatch(actions.setIsDataBaseLive(value))

  const setOnlineStatus: ContextHelperFunction = (value) =>
    appDataDispatch(actions.setIsDataBaseLive(value))

  const helpers: AppDataContextHelpers = {
    setIsDataBaseLive,
    setOnlineStatus,
  }

  return helpers
}
