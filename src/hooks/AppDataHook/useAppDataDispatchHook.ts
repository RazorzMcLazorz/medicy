import { useAppDataDispatch } from './AppDataContext'
import actions from './appDataActions'
import type { AppDataContextHelpers } from './types'
import type { ContextHelperFunction } from '../types'

export default function useAppDataDispatchHook(): AppDataContextHelpers {
  const appDataDispatch = useAppDataDispatch()

  const setOnlineStatus: ContextHelperFunction = (value) =>
    appDataDispatch(actions.setOnlineStatus(value))

  const setGame: ContextHelperFunction = (value) => appDataDispatch(actions.setGame(value))

  const helpers: AppDataContextHelpers = {
    setOnlineStatus,
    setGame,
  }

  return helpers
}
