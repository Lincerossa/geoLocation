import {
  GEOLOCATION_DENY,
  GEOLOCATION_UPDATE,
  GEOLOCATION_LOAD
} from './types'


import { askForGeoLocation, getAddressFromLatLng } from './utility'


const denyGeoLocation = () => ({
  type: GEOLOCATION_DENY,
})

const updateGeoLocation = (location) => ({
  type: GEOLOCATION_UPDATE,
  location,
})

const loadingGeoLocation = () => ({
  type: GEOLOCATION_LOAD,
})


export const getGeoLocation = () => async (dispatch) => {
  dispatch(loadingGeoLocation())
  const location = await askForGeoLocation()
    .catch(() => {
      dispatch(denyGeoLocation())
    })
  if (!location) {
    dispatch(denyGeoLocation())
    return false
  }
  const { coords } = location;
  const { latitude: lat, longitude: lng } = coords;

  const address = await getAddressFromLatLng({ lat, lng })

  dispatch(updateGeoLocation({ lat, lng, address }))

}