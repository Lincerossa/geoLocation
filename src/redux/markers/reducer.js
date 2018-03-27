import {
  MARKERS_RETRIEVE,
  MARKERS_ADD,
} from './types'

const initialState = []

export default (state = initialState, action) => {

  switch (action.type) {

    case MARKERS_RETRIEVE:
      return action.markers

    case MARKERS_ADD:
      return [
        ...state,
        action.marker,
      ]

    default:
      return state
  }

}