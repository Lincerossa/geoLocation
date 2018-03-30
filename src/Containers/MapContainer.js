import React, { Component } from 'react'
import { connect } from 'react-redux'

import { GoogleMap } from '../Components'

import * as actionsMarkers from '../redux/markers/actions';
import * as actionMapCenter from '../redux/mapCenter/actions';

const actions = {
  ...actionsMarkers,
  ...actionMapCenter,
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
      mapCenter,
      markers,
      deselectMarker,
      selectMarker,
      updateMapCenter,
    } = this.props

    if( !mapCenter ) return null
    const {
      lat,
      lng,
      loading,
      zoom,
    } = mapCenter
    
    return (
      <React.Fragment>
        <GoogleMap
          updateMapCenter={updateMapCenter}
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
  mapCenter: state.mapCenter,
  markers: state.markers,
})


export default connect(
  mapStateToProps,
  actions,
)(MapContainer)
