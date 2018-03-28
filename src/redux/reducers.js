import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import geoPosition from './geoPosition/reducer'
import markers from './markers/reducer'
import login from './login/reducer'
import sidebar from './sidebar/reducer'
import highlightMarker from './highlightMarker/reducer'

export default combineReducers({
  geoPosition,
  markers,
  login,
  sidebar,
  highlightMarker,
  form: formReducer,
}) 