import { ACTION_TYPES } from './userInfoActionConstants'

export default function reducer(state: any, action: { type: any; key: any; payload: any }) {
  switch (action.type) {
    case ACTION_TYPES.SET_USER_NAME:
      return {
        ...state,
        [action.key]: action.payload,
      }
    default:
      return state
  }
}
