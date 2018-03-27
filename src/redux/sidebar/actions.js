import { SIDEBAR_OPEN, SIDEBAR_CLOSE } from './types'


export const toggleSidebar = (sidebar) => {

  if (sidebar) {
    return {
      type: SIDEBAR_OPEN,
      sidebar,
    }
  }

  return {
    type: SIDEBAR_CLOSE,
  }

}
