import React from 'react'
import Auth from './Auth.js';

const auth = new Auth();


// qui in qualche modo controllo se è tutto ok
export default WrappedComponent => props => {
  return(
    <WrappedComponent {...props} auth={auth} />
  )
}