import uiid from 'uuid/v4'

export const addMarkerToDatabase = (marker, ref) => {

  const id = uiid()

  return ref.update({
    [id]: marker,
  })
}