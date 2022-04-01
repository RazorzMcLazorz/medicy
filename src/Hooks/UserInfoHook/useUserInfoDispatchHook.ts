import { useUserInfoDispatch } from './UserInfoContext'
import actions from './userInfoActions'
import type { UserInfoContextHelpers } from './types'
import type { ContextHelperFunction } from '../types'

export default function useUserInfoDispatchHook(): UserInfoContextHelpers {
  const userInfoDispatch = useUserInfoDispatch()

  const setUserName: ContextHelperFunction = (value) => userInfoDispatch(actions.setUserName(value))

  const helpers: UserInfoContextHelpers = {
    setUserName,
  }

  return helpers
}
