
import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Loading, Button } from '../Components'

import { Redirect } from 'react-router-dom'

import * as actions from "../redux/geoLocation/actions";

const handleBeginClick = (getGeoLocation) => {
  getGeoLocation()
}

const Root = ({ geoLocation, history, getGeoLocation }) => {
  
  if (geoLocation.lat && geoLocation.lng) {
    return (
      <Redirect to="/map" />
    )
  }

  return(

    <Container>
      {geoLocation.loading && <Loading />}
      <Button onClick={() => handleBeginClick(getGeoLocation)}>
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
  geoLocation: state.geoLocation,
})


export default connect(
  mapStateToProps,
  actions,
)(Root)
