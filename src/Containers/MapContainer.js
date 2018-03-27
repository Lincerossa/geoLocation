import React, { Component } from 'react'
import { connect } from 'react-redux'

import { GoogleMap } from '../Components'

import * as actions from '../redux/actions/manageMarkers';

class MapContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.props.manageMarkers()
  }

  render() {
    const { geoPosition, markers } = this.props

    const {
      lat,
      lng,
      loading
    } = geoPosition
    
    return (
      <GoogleMap
        markers={markers}
        center={{ lat, lng }}
        zoom={!loading ? 9 : 2}
        showMarker={!loading}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  geoPosition: state.geoPosition,
  markers: state.markers,
})


export default connect(
  mapStateToProps,
  actions,
)(MapContainer)
