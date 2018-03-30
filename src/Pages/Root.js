
import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Loading, Button } from '../Components'

import { Redirect } from 'react-router-dom'

import * as actions from "../redux/mapCenter/actions";

const handleBeginClick = (getGeoLocation) => {
  console.log("cliccato")
  getGeoLocation()
}

const Root = ({ mapCenter, history, getGeoLocation }) => {
  
  if (mapCenter && mapCenter.lat && mapCenter.lng) {
    return (
      <Redirect to="/map" />
    )
  }

  return(

    <Container>
      {mapCenter && mapCenter.loading && <Loading />}
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
  mapCenter: state.mapCenter,
})


export default connect(
  mapStateToProps,
  actions,
)(Root)
