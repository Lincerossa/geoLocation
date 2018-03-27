import React from 'react'
import styled from 'styled-components'


const Sidebar = ({ header, children, isActive, onClick }) => (
  <Container isActive={isActive}>
    <Header>
      {header}
      <Icon
        onClick={()=>onClick(null)}
        className="material-icons"
      >navigate_before</Icon>
    </Header>
    {children}
  </Container>
)

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right:0;
  left: 0;
  background: ${props => props.theme.colors.main};
  transform: ${props => props.isActive ? 'none' : 'translate(100%,0)'};
  z-index: 1;
  padding: 1rem;
  color: white;
  transition: .4s ease-in-out;

  @media screen and (min-width: 768px) {
    left: initial;
    width: 350px;
    border-left: 10px solid orange;
  }
`

const Header = styled.div`
  font-size: 1.25rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: .1em;
  margin-bottom: 2rem;
  position: relative;
  border-bottom: 1px solid white;
`

const Icon = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
  border: ${props => props.theme.colors.main};
`

export default Sidebar