import { HIGHLIGHTMARKER_HIDE, HIGHLIGHTMARKER_SHOW } from './types'

export const showHighlightMarker = markerID => ({
  type: HIGHLIGHTMARKER_SHOW,
  markerID,
})

export const hideHighlightMarker = () => ({
  type: HIGHLIGHTMARKER_HIDE,
})