import {
  GEOPOSITION_DENY,
  GEOPOSITION_UPDATE,
  GEOPOSITION_LOAD
} from './types'


import { askForGeoPosition, getAddressFromLatLng } from './utility'


const denyGeoPosition = () => ({
  type: GEOPOSITION_DENY,
})

const updateGeoPosition = (position) => ({
  type: GEOPOSITION_UPDATE,
  position,
})

const loadingGeoPosition = () => ({
  type: GEOPOSITION_LOAD,
})


export const getGeoPosition = () => async (dispatch) => {
  dispatch(loadingGeoPosition())
  const position = await askForGeoPosition()
    .catch(() => {
      dispatch(denyGeoPosition())
    })
  if (!position) return
  const { coords } = position;
  const { latitude: lat, longitude: lng } = coords;

  const address = await getAddressFromLatLng({ lat, lng })

  dispatch(updateGeoPosition({ lat, lng, address }))

}