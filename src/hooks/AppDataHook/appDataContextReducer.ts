import { ACTION_TYPES } from './appDataActionConstants'

export default function reducer(state: any, action: { type: any; key: any; payload: any }) {
  switch (action.type) {
    case ACTION_TYPES.SET_ONLINE_STATUS:
      return {
        ...state,
        [action.key]: action.payload,
      }
    default:
      return state
  }
}
