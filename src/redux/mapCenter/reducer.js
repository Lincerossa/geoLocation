import { MAPCENTER_UPDATE, MAPCENTER_LOAD, MAPCENTER_DENY } from './types'

const initialState = null

export default (state = initialState, action) => {
  switch (action.type) {

    case MAPCENTER_UPDATE:
      return {
        ...state,
        zoom: 15,
        ...action.center,
        loading: false,
      }

    case MAPCENTER_LOAD:
      return {
        ...state,
        loading: true,
      }

    case MAPCENTER_DENY:
      return {
        ...state,
        loading: false,
      }

    default:
      return state
  }
}