import React, { Component } from 'react'
import { connect } from 'react-redux'

import { GoogleMap } from '../Components'

import * as actionsMarkers from '../redux/markers/actions';
import * as actionMapPosition from '../redux/mapPosition/actions';

const actions = {
  ...actionsMarkers,
  ...actionMapPosition,
}

class MapContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.props.manageMarkers()
  }

  render() {
    const {
      geoLocation,
      mapPosition,
      markers,
      deselectMarker,
      selectMarker,
      updateMapPosition,
    } = this.props

    const {
      lat,
      lng,
      loading,
      zoom,
    } = mapPosition || geoLocation
    
    return (
      <React.Fragment>
        <GoogleMap
          updateMapPosition={updateMapPosition}
          selectMarker={selectMarker}
          deselectMarker={deselectMarker}
          markers={markers}
          center={{ lat, lng }}
          zoom={zoom}
          showMarker={!loading}
        />
      </React.Fragment>

    )
  }
}

const mapStateToProps = (state) => ({
  geoLocation: state.geoLocation,
  mapPosition: state.mapPosition,
  markers: state.markers,
})


export default connect(
  mapStateToProps,
  actions,
)(MapContainer)
