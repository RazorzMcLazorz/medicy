import type { ContextHelperFunction } from '../types'

export interface UserInfoContextState {
  userName: string
}

export interface UserInfoContextHelpers {
  setUserName: ContextHelperFunction
}

export interface UserInfoHelpers extends UserInfoContextHelpers {}

export type UserInfoHook = [UserInfoContextState, UserInfoHelpers]

export interface UserInfoActionsType {
  SET_USER_NAME: string
}

export interface UserInfoActionsKey {
  USER_NAME: string
}

export interface UserInfoContextProps {
  children: any
}
