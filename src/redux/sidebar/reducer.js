import { SIDEBAR_OPEN, SIDEBAR_CLOSE } from './types'

const initialState = null

export default (state = initialState, action) => {

  switch (action.type) {

    case SIDEBAR_OPEN:
      if(state === action.sidebar) return initialState
      return action.sidebar

    case SIDEBAR_CLOSE:
      return null

    default:
      return state
  }

}