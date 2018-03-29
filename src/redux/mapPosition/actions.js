import { POSITION_UPDATE } from './types'


export const onIdle = (position) => ({
  type: POSITION_UPDATE,
  position
})