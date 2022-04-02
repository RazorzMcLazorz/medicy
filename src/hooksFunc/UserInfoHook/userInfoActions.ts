import type { ContextActionCreator } from '../types'
import { ACTION_TYPES, ACTION_KEYS } from './userInfoActionConstants'

const setUserName: ContextActionCreator = (data) => ({
  type: ACTION_TYPES.SET_USER_NAME,
  key: ACTION_KEYS.USER_NAME,
  payload: data,
})

const actions = {
  setUserName,
}

export default actions
