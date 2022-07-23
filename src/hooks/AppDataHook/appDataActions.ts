import type { ContextActionCreator } from '../types'
import { ACTION_TYPES, ACTION_KEYS } from './appDataActionConstants'

const setIsDataBaseLive: ContextActionCreator = (data) => ({
  type: ACTION_TYPES.SET_IS_DATA_BASE_LIVE,
  key: ACTION_KEYS.IS_DATA_BASE_LIVE,
  payload: data,
})

const setOnlineStatus: ContextActionCreator = (data) => ({
  type: ACTION_TYPES.SET_ONLINE_STATUS,
  key: ACTION_KEYS.ONLINE_STATUS,
  payload: data,
})

const actions = {
  setIsDataBaseLive,
  setOnlineStatus,
}

export default actions
