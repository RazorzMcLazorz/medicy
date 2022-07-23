import type { ContextHelperFunction } from '../types'

export interface AppDataContextState {
  isDataBaseLive: boolean
  onlineStatus: boolean
}

export interface AppDataContextHelpers {
  setIsDataBaseLive: ContextHelperFunction
  setOnlineStatus: ContextHelperFunction
}

export interface AppDataHelpers extends AppDataContextHelpers {
  checkDataBaseServiceIsLive: () => void
  checkOnlineStatus: () => void
}

export type AppDataHook = [AppDataContextState, AppDataHelpers]

export interface AppDataActionsType {
  SET_IS_DATA_BASE_LIVE: string
  SET_ONLINE_STATUS: string
}

export interface AppDataActionsKey {
  IS_DATA_BASE_LIVE: string
  ONLINE_STATUS: string
}

export interface AppDataContextProps {
  children: any
}
