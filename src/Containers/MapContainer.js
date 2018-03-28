import React, { Component } from 'react'
import { connect } from 'react-redux'

import { GoogleMap } from '../Components'

import * as markersReducers from '../redux/markers/actions';
import * as markersHighlight from '../redux/highlightMarker/actions';

const actions = {
  ...markersReducers,
  ...markersHighlight,
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
      markers,
      highlightMarker,
      showHighlightMarker,
      hideHighlightMarker
    } = this.props

    const {
      lat,
      lng,
      loading
    } = geoLocation
    
    return (
      <GoogleMap
        hideHighlightMarker={hideHighlightMarker}
        showHighlightMarker={showHighlightMarker}
        highlightMarker={highlightMarker}
        markers={markers}
        center={{ lat, lng }}
        zoom={!loading ? 9 : 2}
        showMarker={!loading}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  geoLocation: state.geoLocation,
  markers: state.markers,
  highlightMarker: state.highlightMarker,
})


export default connect(
  mapStateToProps,
  actions,
)(MapContainer)
