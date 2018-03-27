import { LOGOUT } from '../actions/logout'
import { LOGIN } from '../actions/handleLogin'


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