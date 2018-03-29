import React, { Component } from 'react'
import { compose, withProps } from 'recompose'
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import ModalOverlay from './ModalOverlay'
import styled from 'styled-components'

const { MarkerClusterer } = require("react-google-maps/lib/components/addons/MarkerClusterer")
const { InfoBox } = require('react-google-maps/lib/components/addons/InfoBox')


const MyInfoBox = ({ hideHighlightMarker, center, highlightMarker, markers }) => {

  const marker = markers.find(marker => marker.id === highlightMarker)
  return (
    <InfoBox
      onCloseClick={() => {
        hideHighlightMarker()
        return false
      }}
      defaultPosition={new window.google.maps.LatLng(center.lat, center.lng)}
    >
      <MarkerLabel
      >
        <p>{marker.address}</p>
        <p>{marker.description}</p>
        <p>{marker.lat}</p>
        <p>{marker.lng}</p>
      </MarkerLabel>
    </InfoBox>
  )

}




class Map extends Component {

  render() {

    const {
      center,
      zoom,
      highlightMarker,
      markers,
      showHighlightMarker,
      hideHighlightMarker,
      onIdle,
    } = this.props

    return (
      <GoogleMap
        zoom={zoom}
        center={center}
        ref={ mappina => this.map = mappina}
        onDragEnd={() => onIdle({ 
            lat: this.map.getCenter().lat(), 
            lng: this.map.getCenter().lng(), 
            loading: false,
            zoom: this.map.getZoom(),
          }) 
        }
      >
        <React.Fragment>

        {
          highlightMarker &&
            <MyInfoBox
              hideHighlightMarker={hideHighlightMarker}
              center={center}
              markers={markers}
              highlightMarker={highlightMarker}
            />
        }
        

        {
          markers &&
          markers.length &&
          <MarkerClusterer
            averageCenter
            enableRetinaIcons
            gridSize={2}
          >
            {
              markers.map((marker, index) => (
                <Marker
                  key={marker.id}
                  onClick={() => {
                    onIdle({
                      lat: marker.lat,
                      lng: marker.lng,
                      loading: false,
                      zoom: this.map.getZoom(),
                    }) 
                    showHighlightMarker(marker.id)}
                  }
                  position={{ lat: marker.lat, lng: marker.lng }}
                />
              ))}
          </MarkerClusterer>
        }
        </React.Fragment>
      </GoogleMap>


    )
  }
}

const MarkerLabel = styled.div`
  background: violet;
  color: white;
  font-size: 1rem;
  padding: 1rem;
  width: -webkit-fill-available;
  border-radius: 10px;
  border: 6px solid darkviolet;
`

 


const composedMap = compose(
  withProps({
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%`}} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withGoogleMap,
)(Map)


export default composedMap