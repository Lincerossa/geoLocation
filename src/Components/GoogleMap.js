import React, { Component } from 'react'
import { compose, withProps } from 'recompose'
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import ModalOverlay from './ModalOverlay'
import styled from 'styled-components'
import {isEqual} from 'lodash'

const { MarkerClusterer } = require("react-google-maps/lib/components/addons/MarkerClusterer")
const { InfoBox } = require('react-google-maps/lib/components/addons/InfoBox')

const SelectedMarkerLabel = ({ deselectMarker, center, highlightMarker, markers }) => {

  
  const marker = markers.listOfMarkers.find(marker => marker.id === markers.selectedMarker)
  
  return (
    <InfoBox
      onCloseClick={() => {
        deselectMarker()
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

class Cluster extends Component {

  constructor(props){
    super(props)
  }


  shouldComponentUpdate(nextProps){

    const { listOfMarkers: newMarkers } = nextProps.markers && nextProps.markers
    const { listOfMarkers: oldMarkers } = this.props.markers

    const preventUselessRerender = isEqual(newMarkers, oldMarkers)

    return !preventUselessRerender
  }


  render(){

    const { markers, updateMapCenter, selectMarker, deselectMarker, map } = this.props
    return(
      <MarkerClusterer
        averageCenter
        enableRetinaIcons
        gridSize={2}
      >
        {
          markers.listOfMarkers.map((marker, index) => (
            <Marker
              key={marker.id}
              onClick={() => {
                selectMarker()
                updateMapCenter({
                  lat: marker.lat,
                  lng: marker.lng,
                  loading: false,
                  zoom: map.getZoom(),
                })
                selectMarker(marker.id)
              }
              }
              position={{ lat: marker.lat, lng: marker.lng }}
            />
          ))}
      </MarkerClusterer>


    )
  }
}




class Map extends Component {


  constructor(props){
    super(props)
  }
  render() {

    const {
      center,
      zoom,
      markers,
      updateMapCenter,
      selectMarker,
      deselectMarker,
    } = this.props

    return (
      <GoogleMap
        zoom={zoom}
        center={center}
        ref={ mappina => this.map = mappina}
        onClick={deselectMarker}
        onDragEnd={() => {
          updateMapCenter({ 
            lat: this.map.getCenter().lat(), 
            lng: this.map.getCenter().lng(),
            zoom: this.map.getZoom(),
          }) 
        }
        }
      >
        <React.Fragment>

        {
          markers.selectedMarker &&
            <SelectedMarkerLabel
              center={center}
              deselectMarker={deselectMarker}
              markers={markers}
            />
        }
        

        {
          markers &&
          markers.listOfMarkers &&
          markers.listOfMarkers.length &&
            <Cluster 
              markers={markers}
              selectMarker={selectMarker}
              deselectMarker={deselectMarker}
              map={this.map}
              updateMapCenter={updateMapCenter}
            />
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