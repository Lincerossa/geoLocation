import React from 'react'
import styled from 'styled-components'

import { MapContainer, MapSidebar } from '../Containers'


const Map = () => (
  <Container>
    <MapWrapper>
      <MapContainer />
    </MapWrapper>
    <MapSidebar />
  </Container>
)

const Container = styled.div`
  
`

const MapWrapper = styled.div`

  width: 100%;
  position: relative;
  height: calc(100vh - 60px);

`


export default Map