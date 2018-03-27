
import uiid from 'uuid/v4'
import { getDatabaseReference, getArrFromObj } from '../../utility'

export const MARKERS_ADD = 'MARKERS_ADD'
export const MARKERS_RETRIEVE = 'MARKERS_RETRIEVE'

const retrieveMarkers = markers => ({
  type: MARKERS_RETRIEVE,
  markers
})

const addMarker = (marker) => ({
  type: MARKERS_ADD,
  marker,
})

const addMarkerToDatabase = (marker, ref) => {

  const id = uiid()

  return ref.update({
    [id]: marker,
  })
}

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