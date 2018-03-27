

import React, {Component} from 'react'
import styled from 'styled-components'


class Input extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      isActive: props.value || null
    }
    this.handleFocus = this.handleFocus.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
  }

  handleFocus(){
    this.setState({
      isActive: true
    })
  }

  handleBlur(value) {
    this.setState({
      isActive: !!value,
    })
  }


  render() {
    const { handleChange, value, type, label } = this.props
    const { isActive } = this.state

    return(
      <Wrapper>
        {label && <Label
          isActive={isActive || value.length}
        >{label}</Label>}
        <InputField
          onFocus={ this.handleFocus }
          onBlur={() => this.handleBlur(value) }
          onChange={ e => handleChange(e.target.value) }
          type={type}
          value={value}
        />
      </Wrapper>
    )
  }
}


const Wrapper = styled.div`
  position: relative;
  background-color: white;
`

const Label = styled.label`
  pointer-events: none;
  position: absolute;
  left: 1rem;
  top: ${props => props.isActive ? '0' :'50%'};
  transform: translate(0,-50%);
  font-size: ${props => props.isActive ? ' .75rem' : '1rem'};
  text-transform: uppercase;
  transition: all .2s;
  background-color: inherit;
`

const InputField = styled.input`
  -webkit-appearance: none;
  border: 1px solid ${props => props.theme.colors.main};
  font-size: 1.25rem;
  padding: 1rem;
  text-transform: uppercase;
  letter-spacing: .1em;

  &:focus {
    outline: none;
  }
`

export default Input