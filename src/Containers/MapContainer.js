import React, { Component } from 'react'
import { connect } from 'react-redux'

import { GoogleMap } from '../Components'

import * as actionsMarkers from '../redux/markers/actions';
import * as actionsHighlightMarker from '../redux/highlightMarker/actions';
import * as actionOnIdle from '../redux/mapPosition/actions';

const actions = {
  ...actionsMarkers,
  ...actionsHighlightMarker,
  ...actionOnIdle,
}

class MapContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.props.manageMarkers()
  }


  onChangeEnd(tutto){
    console.log("end tutto", tutto)
  }

  onChangeStart(tutto) {
    console.log("start tutto", tutto)
  }

  render() {
    const {
      geoLocation,
      mapPosition,
      markers,
      highlightMarker,
      showHighlightMarker,
      hideHighlightMarker,
      onIdle,
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
          hideHighlightMarker={hideHighlightMarker}
          showHighlightMarker={showHighlightMarker}
          highlightMarker={highlightMarker}
          onIdle={onIdle}
          markers={markers}
          center={{ lat, lng }}
          zoom={zoom}
          showMarker={!loading}
        />
        <p onClick={hideHighlightMarker}>chiudi</p>
      </React.Fragment>

    )
  }
}

const mapStateToProps = (state) => ({
  geoLocation: state.geoLocation,
  mapPosition: state.mapPosition,
  markers: state.markers,
  highlightMarker: state.highlightMarker,
})


export default connect(
  mapStateToProps,
  actions,
)(MapContainer)
