import React, { useReducer } from 'react'
import AppDataContextReducer from './appDataContextReducer'
import { AppDataContextState, AppDataContextProps } from './types'

const AppDataContext = React.createContext({})
const AppDataDispatch = React.createContext({})

export const initState: AppDataContextState = {
  onlineStatus: false,
}

export default function AppDataContextProvider({ children }: AppDataContextProps) {
  const [AppDataState, dispatch] = useReducer(AppDataContextReducer, initState)

  return (
    <AppDataContext.Provider value={AppDataState}>
      <AppDataDispatch.Provider value={dispatch}>{children}</AppDataDispatch.Provider>
    </AppDataContext.Provider>
  )
}

export const useAppDataContext = (): AppDataContextState => {
  const context = React.useContext(AppDataContext)

  if (!context) throw new Error('useAppDataContext must be used within a AppDataContextProvider')

  return context as AppDataContextState
}

// !NOTE: This is not used to build other hooks and should not be used inside a component directly
export const useAppDataDispatch = (): any => {
  const context = React.useContext(AppDataDispatch)

  if (!context) throw new Error('useAppDataDispatch must be used within a AppDataContextProvider')

  return context
}
