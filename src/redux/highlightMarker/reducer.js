import {
  HIGHLIGHTMARKER_SHOW,
  HIGHLIGHTMARKER_HIDE,
} from './types'

const initialState = null

export default (state = initialState, action) => {
  switch (action.type) {

    case HIGHLIGHTMARKER_SHOW:
      return action.markerID

    case HIGHLIGHTMARKER_HIDE:
      return initialState

    default:
      return state
  }
}