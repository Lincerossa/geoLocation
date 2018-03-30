
import { POSITION_UPDATE } from './types'

const initialState = null

export default (state = initialState, action) => {
  switch (action.type) {

    case POSITION_UPDATE:

      return {
        ...state,
        ...action.position,
      }

    default:
      return state
  }
}