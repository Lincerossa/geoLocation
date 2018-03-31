import React from 'react'
import Auth from './Auth.js';
import styled from 'styled-components'
import { Button } from '../../Components'

const auth = new Auth();


export default WrappedComponent => props => {

  auth.handleAuthentication()

  if (!auth.isAuthenticated()) {
    return(
      <LoginContainer>
        <Button onClick={() => auth.login()}>Effettua l'accesso </Button>
      </LoginContainer>
    )
  }

  return (
    <React.Fragment>
      <WrappedComponent {...props} auth={auth} />
    </React.Fragment>
  )
}

const LoginContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`