
export const GEOPOSITION_UPDATE = 'GEOPOSITION_UPDATE';
export const GEOPOSITION_DENY = 'GEOPOSITION_DENY';
export const GEOPOSITION_LOAD = 'GEOPOSITION_LOAD';

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


const askForGeoPosition = () => new Promise((resolve, reject) => {
  navigator.geolocation.getCurrentPosition(() => {
    console.log('yogurt')
  }, reject)
})

const getAddressFromLatLng = ({ lat, lng }) => {
  const google = window.google

  var geocoder = new google.maps.Geocoder()
  var location = new google.maps.LatLng(lat, lng)

  const promiz = new Promise((resolve, reject) => {

    geocoder.geocode({ 'latLng': location }, (results, status) => {
      if (status === google.maps.GeocoderStatus.OK) {
        resolve(results[0].formatted_address)
      }
      reject()
    }, reject)
  })

  return promiz
}

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
