import {
  MAPCENTER_DENY,
  MAPCENTER_LOAD,
  MAPCENTER_UPDATE,
} from './types'


import { askForGeoLocation } from './utility'
import { getAddressFromLatLng } from '../../utility'


const denyMapCenter = () => ({
  type: MAPCENTER_DENY,
})


const loadMapCenter = () => ({
  type: MAPCENTER_LOAD,
})


const geoLocationDone = (center) => ({
  type: MAPCENTER_UPDATE,
  center,
})

export const getGeoLocation = () => async (dispatch) => {
  dispatch(loadMapCenter())
  const location = await askForGeoLocation()
    .catch((e) => {
      console.log("geo location denied")
      dispatch(denyMapCenter())
      return false
    })
  if (!location) {
    dispatch(denyMapCenter())
    return false

  }

  const { coords } = location;
  const { latitude: lat, longitude: lng } = coords;

  const address = await getAddressFromLatLng({ lat, lng })

  dispatch(geoLocationDone({ lat, lng, address }))

}



export const updateMapCenter = ({ lat, lng, zoom }) => async (dispatch) => {

  if (!(lat || lng || zoom )) {
    dispatch(denyMapCenter())
    return false
  }

  const address = await getAddressFromLatLng({ lat, lng })
  console.log("aadrre", address)
  dispatch(geoLocationDone({ lat, lng, address, zoom }))

}