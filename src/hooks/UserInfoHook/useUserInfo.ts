import type { UserInfoHook, UserInfoContextState, UserInfoHelpers } from './types'
import useUserInfoDispatchHook from './useUserInfoDispatchHook'
import { useUserInfoContext } from './UserInfoContext'

export default function useUserInfo(): UserInfoHook {
  const helpers = useUserInfoDispatchHook()
  const state = useUserInfoContext()

  const hookState: UserInfoContextState = { ...state }

  const hookHelpers: UserInfoHelpers = { ...helpers }

  return [hookState, hookHelpers]
}
