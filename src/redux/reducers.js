import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import geoLocation from './geoLocation/reducer'
import markers from './markers/reducer'
import login from './login/reducer'
import sidebar from './sidebar/reducer'
import highlightMarker from './highlightMarker/reducer'

export default combineReducers({
  geoLocation,
  markers,
  login,
  sidebar,
  highlightMarker,
  form: formReducer,
}) 