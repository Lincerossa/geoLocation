import { combineReducers } from 'redux'
import geoPosition from './geoPosition'
import login from './login'
import markers from './markers'
import sidebar from './sidebar'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  geoPosition,
  login,
  markers,
  sidebar,
  form: formReducer,
})