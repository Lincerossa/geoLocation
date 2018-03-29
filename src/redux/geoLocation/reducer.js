
import {
  GEOLOCATION_DENY,
  GEOLOCATION_UPDATE,
  GEOLOCATION_LOAD
} from './types'

const initialState = {
  lat: null,
  lng: null,
  loading: null,
  address: null,
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {

    case GEOLOCATION_UPDATE:
      return {
        ...state,
        ...action.location,
        loading: false,
        error: null,
      }

    case GEOLOCATION_DENY:
      return {
        ...state,
        loading: null,
        error: true,
      }

    case GEOLOCATION_LOAD:
      return {
        ...state,
        loading: true,
        error: null,
      }

    default:
      return state
  }
}