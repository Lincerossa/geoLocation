export const SIDEBAR_OPEN = 'SIDEBAR_OPEN'
export const SIDEBAR_CLOSE = 'SIDEBAR_CLOSE'



export const toggleSidebar = (sidebar) => {

  if (sidebar) {
    console.log("open")
    return {
      type: SIDEBAR_OPEN,
      sidebar,
    }
  }

  return {
    type: SIDEBAR_CLOSE,
  }

}