import React, { Component } from 'react'
import { compose, withProps } from 'recompose'
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import ModalOverlay from './ModalOverlay'

const { MarkerClusterer } = require("react-google-maps/lib/components/addons/MarkerClusterer");

const Map = ({
  center,
  highlightMarker,
  zoom,
  markers,
  showHighlightMarker,
  hideHighlightMarker,
}) => {
  return (
  <GoogleMap
    zoom={zoom}
    center={center}
  >
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
            <React.Fragment>
              <Marker
                key={index}
                onClick={() => showHighlightMarker(index)}
                position={{ lat: marker.lat, lng: marker.lng }}
              >
              </Marker>
              {
                (highlightMarker === index) &&
                <ModalOverlay showModal>
                  <p>{marker.lat}</p>
                  <p>{marker.lng}</p>
                  <p>{marker.address}</p>
                  <p>{marker.category}</p>
                  <p>{marker.description}</p>
                  <div onClick={hideHighlightMarker}>disattiva</div>
                </ModalOverlay>
              }
            </React.Fragment>
          ))}
      </MarkerClusterer>
    }
  </GoogleMap>
  )
}
 


const composedMap = compose(
  withProps({
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%`}} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withGoogleMap,
)(Map)

export default composedMap