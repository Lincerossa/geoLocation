import { POSITION_UPDATE } from './types'

import { getAddressFromLatLng } from '../../utility'


const actionCreator = (position) => ({
  type: POSITION_UPDATE,
  position
})


export const updateMapPosition = ({ lat, lng, zoom, loading }) => async (dispatch, getState) => {
  
  dispatch(actionCreator({ lat, lng, zoom, loading }))

  const address = await getAddressFromLatLng({ lat, lng })
  dispatch(actionCreator({ address }))
}