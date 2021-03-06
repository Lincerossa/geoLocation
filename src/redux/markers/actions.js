import {
  MARKERS_RETRIEVE,
  MARKERS_SELECT,
  MARKERS_DESELECT,
} from './types'

import { getDatabaseReference, getArrFromObj } from '../../utility'
import { addMarkerToDatabase } from './utility'

const retrieveMarkers = markers => ({
  type: MARKERS_RETRIEVE,
  markers
})


export function manageMarkers(marker) {

  return async (dispatch, getState) => {
    const ref = getDatabaseReference('markers/')

    if (marker) {
      await addMarkerToDatabase(marker, ref)
    }

    const snapshot = await ref.once('value')
    const markers = getArrFromObj(snapshot.val())
    dispatch(retrieveMarkers(markers))
  }
}

export const selectMarker = (selectedMarker) => ({
  type: MARKERS_SELECT,
  selectedMarker,
})

export const deselectMarker = () => ({
  type: MARKERS_DESELECT,
})