import type { AppDataHook, AppDataContextState, AppDataContextHelpers } from './types'
import useAppDataDispatchHook from './useAppDataDispatchHook'
import { useAppDataContext } from './AppDataContext'

export default function useAppData(): AppDataHook {
  const helpers = useAppDataDispatchHook()
  const state = useAppDataContext()

  const hookState: AppDataContextState = { ...state }

  const hookHelpers: AppDataContextHelpers = { ...helpers }

  return [hookState, hookHelpers]
}
