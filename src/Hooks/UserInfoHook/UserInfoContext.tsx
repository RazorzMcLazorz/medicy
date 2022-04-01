import React, { useReducer } from 'react'
import UserInfoContextReducer from './userInfoContextReducer'
import { UserInfoContextState, UserInfoContextProps } from './types'

const UserInfoContext = React.createContext({})
const UserInfoDispatch = React.createContext({})

export const initState: UserInfoContextState = {
  userName: '',
}

export default function UserInfoContextProvider({ children }: UserInfoContextProps) {
  const [UserInfoState, dispatch] = useReducer(UserInfoContextReducer, initState)

  return (
    <UserInfoContext.Provider value={UserInfoState}>
      <UserInfoDispatch.Provider value={dispatch}>{children}</UserInfoDispatch.Provider>
    </UserInfoContext.Provider>
  )
}

export const useUserInfoContext = (): UserInfoContextState => {
  const context = React.useContext(UserInfoContext)

  if (!context) throw new Error('useUserInfoContext must be used within a UserInfoContextProvider')

  return context as UserInfoContextState
}

// !NOTE: This is not used to build other hooks and should not be used inside a component directly
export const useUserInfoDispatch = (): any => {
  const context = React.useContext(UserInfoDispatch)

  if (!context) throw new Error('useUserInfoDispatch must be used within a UserInfoContextProvider')

  return context
}
