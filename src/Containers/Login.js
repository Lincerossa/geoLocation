import React,  { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import * as actions from '../redux/actions/handleLogin'

import { Input } from '../Components'

class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      login: props.login,
      value: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  

  handleSubmit(e){
    e.preventDefault()

    const { handleLogin } = this.props
    const { value } = this.state

    

  }

  handleChange(value) {
    this.setState({
      value,
    })
  }

  
  componentWillReceiveProps(nextProps) {
    const { login } = nextProps
    const { history } = this.props
    if (login && login.userChecked && login.isGuest && !login.guestNameAlreadyTaken ) {
      history.push('/inserimentoDatabase')
      return false
    } 
  }  
  render() {
    
    const { login } = this.props
    const { value } = this.state
    return(
      <Container>
        <Form onSubmit={(e) => this.handleSubmit(e)}>
          <Input 
            type="text" 
            value={value}
            label="Inserisci il tuo username"
            handleChange={this.handleChange}
          />
        </Form>
        {
          login.userChecked && 
          login.guestNameAlreadyTaken && <p> guest già preso </p>
        }
        {
          login.userChecked &&
          !login.isGuest && <p> già registrato </p>
        }
      </Container>
    )
  }
}

const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
`

const Form = styled.form`
  width: 100%;
  text-align: center;
  display: inline-block;
`


const mapStateToProps = (state) => ({
  login: state.login
})

export default connect(
  mapStateToProps,
  actions,
)(Login)
