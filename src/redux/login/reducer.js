import { LOGOUT, LOGIN } from './types'

const initialState = {
  username: null,
}

export default (state = initialState, action) => {
  switch (action.type) {

    case LOGIN:
      return {
        ...state,
        ...action.login,
      }

    case LOGOUT:
      return initialState

    default:
      return state
  }
}