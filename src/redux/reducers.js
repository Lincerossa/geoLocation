import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import geoLocation from './geoLocation/reducer'
import mapPosition from './mapPosition/reducer'
import markers from './markers/reducer'
import login from './login/reducer'
import sidebar from './sidebar/reducer'

export default combineReducers({
  geoLocation,
  markers,
  login,
  sidebar,
  mapPosition,
  form: formReducer,
}) 