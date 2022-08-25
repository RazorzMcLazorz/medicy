import type { ContextHelperFunction } from '../types'

export interface AppDataContextState {
  onlineStatus: boolean
}

export interface AppDataContextHelpers {
  setOnlineStatus: ContextHelperFunction
}

export interface AppDataHelpers extends AppDataContextHelpers {
  checkOnlineStatus: () => void
}

export type AppDataHook = [AppDataContextState, AppDataHelpers]

export interface AppDataActionsType {
  SET_ONLINE_STATUS: string
}

export interface AppDataActionsKey {
  ONLINE_STATUS: string
}

export interface AppDataContextProps {
  children: any
}
