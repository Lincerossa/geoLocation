
import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Loading, Button } from '../Components'

import { Redirect } from 'react-router-dom'

import * as actions from "../redux/geoPosition/actions";

const handleBeginClick = (getGeoPosition) => {
  getGeoPosition()
}

const Root = ({ geoPosition, history, getGeoPosition }) => {
  
  if (geoPosition.lat && geoPosition.lng) {
    return (
      <Redirect to="/map" />
    )
  }

  return(

    <Container>
      {geoPosition.loading && <Loading />}
      <Button onClick={() => handleBeginClick(getGeoPosition)}>
        Geolocalizzami
      </Button>

    </Container>
  )
}
   

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  background-color: rgba(black, .5);
  align-items: center;
  background: ${ props => props.theme.colors.third};
  justify-content: center;
`

const mapStateToProps = (state) => ({
  geoPosition: state.geoPosition,
})


export default connect(
  mapStateToProps,
  actions,
)(Root)
