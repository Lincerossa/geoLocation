

import React from 'react'
import styled from 'styled-components'

const Button = ({ onClick, children, type, small }) => (
  <Wrapper 
    small={small}
    type={type}
    onClick={onClick}
  >
    { children }
  </Wrapper>
)



const Wrapper = styled.button`
  outline: none;
  -webkit-appearance: none;
  border: none;
  font-size: ${props => props.small ? '.75rem' : '1rem'};
  padding: ${props => props.small ? '.5rem' : '1rem'};
  margin: 0;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: .1em;
  border: 2px solid black;
  cursor: pointer;
  background: white;
  transition: .3s all;
  &:hover{
    color: ${props => props.theme.colors.main};
    background: ${props => props.theme.colors.secondary};
  }
`


export default Button