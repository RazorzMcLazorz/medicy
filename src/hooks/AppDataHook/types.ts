import type { ContextHelperFunction } from '../types'

export interface AppDataContextState {
  onlineStatus: boolean
  game?: {}
}

export interface AppDataContextHelpers {
  setOnlineStatus: ContextHelperFunction
  setGame: ContextHelperFunction
}

export interface AppDataHelpers extends AppDataContextHelpers {
  checkOnlineStatus: () => void
}

export type AppDataHook = [AppDataContextState, AppDataHelpers]

export interface AppDataActionsType {
  SET_ONLINE_STATUS: string
  SET_GAME: string
}

export interface AppDataActionsKey {
  ONLINE_STATUS: string
  GAME: string
}

export interface AppDataContextProps {
  children: any
}
