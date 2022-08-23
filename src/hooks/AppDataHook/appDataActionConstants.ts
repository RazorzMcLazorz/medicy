import type { AppDataActionsType, AppDataActionsKey } from './types'

export const ACTION_TYPES: AppDataActionsType = {
  SET_IS_DATA_BASE_LIVE: 'SET_IS_DATA_BASE_LIVE',
  SET_ONLINE_STATUS: 'SET_ONLINE_STATUS',
}

export const ACTION_KEYS: AppDataActionsKey = {
  IS_DATA_BASE_LIVE: 'isDataBaseLive',
  ONLINE_STATUS: 'onlineStatus',
}
