import {
  MARKERS_RETRIEVE,
  MARKERS_SELECT,
  MARKERS_DESELECT,
} from './types'

const initialState = []

export default (state = initialState, action) => {

  switch (action.type) {

    case MARKERS_RETRIEVE:
      return {
        listOfMarkers: action.markers,
        selectedMarker: state.selectedMarker,
      }

    case MARKERS_SELECT:
      return {
        listOfMarkers: state.listOfMarkers,
        selectedMarker: action.selectedMarker,    
      }

    case MARKERS_DESELECT:
      return {
        listOfMarkers: state.listOfMarkers,
        selectedMarker: null,
      }

    default:
      return state
  }

}