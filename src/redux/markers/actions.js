import {
  MARKERS_ADD,
  MARKERS_RETRIEVE,
} from './types'

import { getDatabaseReference, getArrFromObj } from '../../utility'
import { addMarkerToDatabase } from './utility'

const retrieveMarkers = markers => ({
  type: MARKERS_RETRIEVE,
  markers
})

const addMarker = (marker) => ({
  type: MARKERS_ADD,
  marker,
})


export function manageMarkers(marker) {

  return async (dispatch, getState) => {
    const ref = getDatabaseReference('markers/')

    if (marker) {
      await addMarkerToDatabase(marker, ref)
      dispatch(addMarker(marker))
      return false
    }

    const snapshot = await ref.once('value')
    const markers = getArrFromObj(snapshot.val())
    dispatch(retrieveMarkers(markers))
  }
}