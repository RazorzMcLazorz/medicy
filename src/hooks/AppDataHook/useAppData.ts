import type { AppDataHook, AppDataContextState, AppDataHelpers } from './types'
import useAppDataDispatchHook from './useAppDataDispatchHook'
import { useAppDataContext } from './AppDataContext'
import { createInitialMapGen } from './utils'

export default function useAppData(): AppDataHook {
  const helpers = useAppDataDispatchHook()
  const state = useAppDataContext()
  const { game } = state
  const { setOnlineStatus, setGame } = helpers

  const checkOnlineStatus = (): void => setOnlineStatus(window.navigator.onLine)

  const handleIntialMapGeneration = (mapSize: number) => {
    setGame({ ...game, gameMap: createInitialMapGen(mapSize) })
  }

  const hookState: AppDataContextState = { ...state }

  const hookHelpers: AppDataHelpers = { ...helpers, checkOnlineStatus, handleIntialMapGeneration }

  return [hookState, hookHelpers]
}
