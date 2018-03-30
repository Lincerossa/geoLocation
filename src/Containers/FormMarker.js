import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import { Form } from '../Components/';

import { connect } from 'react-redux'

import * as actions from "../redux/markers/actions";

const ConnectedForm = reduxForm({
  form: 'markerGenerator'
})(Form)


const fields = (address)=>([
  {
    name: 'address',
    placeholder: `${address ? address : 'via volta 55, Gravedona ed Uniti(CO)'}`,
    component: 'input',
    type: 'text',
    label: 'localita'
  },
  {
    name: 'category',
    placeholder: 'segnaletica stradale',
    component: 'input',
    type: 'text',
    label: 'categoria'
  },
  {
    name: 'description',
    placeholder: 'semaforo rotto',
    component: 'input',
    type: 'text',
    label: 'descrizione'
  },
])

class FormMarker extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.preventSubmit = this.preventSubmit.bind(this)
  }



  preventSubmit({form, address}){
    if (
      form.markerGenerator &&
      form.markerGenerator.values &&
      form.markerGenerator.values.description &&
      form.markerGenerator.values.category &&
      (address || form.markerGenerator.values.address)
    ) {
      return false
    }
    return true
  }


  handleSubmit({
    e,
    address,
    lat,
    lng,
  }) {
    e.preventDefault()

    const { form, manageMarkers } = this.props

    if (this.preventSubmit({ form, address})) {
      return false
    } 
    
    const { category, description, address: formAddress } = form.markerGenerator.values

    const markerToAdd = {
      lat,
      lng,
      address: formAddress || address,
      category,
      description,
    }
    manageMarkers(markerToAdd)
    
  }

  render() {
    const { lat, lng, address } = this.props.mapPosition || this.props.geoLocation
    return(
      <ConnectedForm
        handleSubmit={(e) => this.handleSubmit({e, lat, lng, address})}
        fields={fields(address)}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  geoLocation: state.geoLocation,
  mapPosition: state.mapPosition,
  form: state.form,
})


export default connect(
  mapStateToProps,
  actions,
)(FormMarker)