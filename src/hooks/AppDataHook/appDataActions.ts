import type { ContextActionCreator } from '../types'
import { ACTION_TYPES, ACTION_KEYS } from './appDataActionConstants'

const setOnlineStatus: ContextActionCreator = (data) => ({
  type: ACTION_TYPES.SET_ONLINE_STATUS,
  key: ACTION_KEYS.ONLINE_STATUS,
  payload: data,
})

const actions = {
  setOnlineStatus,
}

export default actions
