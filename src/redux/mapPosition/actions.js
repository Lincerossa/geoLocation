import { POSITION_UPDATE } from './types'


export const updateMapPosition = (position) => ({
  type: POSITION_UPDATE,
  position
})