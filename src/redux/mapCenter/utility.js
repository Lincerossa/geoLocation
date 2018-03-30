export const askForGeoLocation = () => new Promise((resolve, reject) => {
  navigator.geolocation.getCurrentPosition(resolve, reject)
})

export const getAddressFromLatLng =  ({ lat, lng }) => {
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