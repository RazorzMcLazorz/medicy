import type { ContextHelperFunction } from '../types'

export interface AppDataContextState {
  isDataBaseLive: boolean
}

export interface AppDataContextHelpers {
  setIsDataBaseLive: ContextHelperFunction
}

export interface AppDataHelpers extends AppDataContextHelpers {
  checkDataBaseServiceIsLive: () => void
}

export type AppDataHook = [AppDataContextState, AppDataHelpers]

export interface AppDataActionsType {
  SET_IS_DATA_BASE_LIVE: string
}

export interface AppDataActionsKey {
  IS_DATA_BASE_LIVE: string
}

export interface AppDataContextProps {
  children: any
}
