import type { ContextHelperFunction } from '../types'

export interface AppDataContextState {
  isDataBaseLive: boolean
}

export interface AppDataContextHelpers {
  setIsDataBaseLive: ContextHelperFunction
}

export type AppDataHook = [AppDataContextState, AppDataContextHelpers]

export interface AppDataActionsType {
  SET_IS_DATA_BASE_LIVE: string
}

export interface AppDataActionsKey {
  IS_DATA_BASE_LIVE: string
}

export interface AppDataContextProps {
  children: Node
}
