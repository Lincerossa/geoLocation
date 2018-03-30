import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import mapCenter from './mapCenter/reducer'
import markers from './markers/reducer'
import login from './login/reducer'
import sidebar from './sidebar/reducer'

export default combineReducers({
  markers,
  login,
  sidebar,
  mapCenter,
  form: formReducer,
}) 