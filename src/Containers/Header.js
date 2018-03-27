import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import * as actions from '../redux/actions/toggleSidebar'

import { Link } from 'react-router-dom'

const Header = ({ toggleSidebar, sidebar }) => (
  <Container>

    <Wrapper>
      <Link to="/">
        <Icon className="material-icons"
        >home</Icon>
      </Link>
    </Wrapper>

    <Wrapper>
      <Icon
        onClick={() => toggleSidebar('bookmark')}
        className="material-icons"
      >bookmark</Icon>
      
      <Link to="/login">
        <Icon 
          className="material-icons"
        >account_circle</Icon>
      </Link>
    </Wrapper>
  </Container>
)

const Container = styled.div`
  height: 60px;
  border-bottom:${props => props.theme.colors.secondary};
  margin: 0;
  display: flex;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background: ${props => props.theme.colors.main};
  color: ${props => props.theme.colors.secondary};
`

const Wrapper = styled.div``

const Icon = styled.div`
  cursor: pointer;
  font-size: 2.25rem;
  padding: 0 .5rem;  
`

const mapStateToProps = (state) => ({
  login: state.login,
  sidebar: state.sidebar
})

export default connect(
  mapStateToProps,
  actions,
)(Header)
