import React, { Component } from 'react'
import { compose, withProps } from 'recompose'
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import ModalOverlay from './ModalOverlay'

const { MarkerClusterer } = require("react-google-maps/lib/components/addons/MarkerClusterer");


class Map extends Component {


  constructor(props){
    super(props)
    this.state={
    }
    this.handleToggleMarker = this.handleToggleMarker.bind(this)
  }


  handleToggleMarker(activeMarkerId) {
    this.setState({
      activeMarkerId
    })
    console.log("activeMarkerId", activeMarkerId)
  }



  render() {

    const { center, zoom, markers } = this.props

    const { activeMarkerId } = this.state
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
                    onMouseOver={() => this.handleToggleMarker(index)}
                    onTouchStart={() => this.handleToggleMarker(index)}
                    position={{ lat: marker.lat, lng: marker.lng }}
                  >
                  </Marker>
                  { 
                    (activeMarkerId === index) &&
                    <ModalOverlay
                      showModal
                      closeModal={this.handleToggleMarker}
                    >
                      <p>{marker.lat}</p>
                      <p>{marker.lng}</p>
                      <p>{marker.address}</p>
                      <p>{marker.category}</p>
                      <p>{marker.description}</p>
                    </ModalOverlay>
                  }
                </React.Fragment>
              ))}
          </MarkerClusterer>
        }
      </GoogleMap>)
  }
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