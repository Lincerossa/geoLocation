import {
  GEOPOSITION_UPDATE,
  GEOPOSITION_DENY,
  GEOPOSITION_LOAD,
} from '../actions/getGeoPosition'

const initialState = {
  lat: null,
  lng: null,
  loading: null,
  address: null,
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {

    case GEOPOSITION_UPDATE:
      return {
        ...state,
        ...action.position,
        loading: false,
        error: null,
      }

    case GEOPOSITION_DENY:
      return {
        ...state,
        loading: null,
        error: true,
      }

    case GEOPOSITION_LOAD:
      return {
        ...state,
        loading: true,
        error: null,
      }

    default:
      return state
  }
}
