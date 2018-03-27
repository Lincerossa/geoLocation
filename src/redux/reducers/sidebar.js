import { SIDEBAR_OPEN, SIDEBAR_CLOSE } from '../actions/toggleSidebar'

const initialState = null

export default (state = initialState, action) => {
  
  switch (action.type) {

    case SIDEBAR_OPEN:

      return action.sidebar

    case SIDEBAR_CLOSE:
      return null

    default:
      return state
  }

}