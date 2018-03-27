import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import * as actions from '../redux/actions/toggleSidebar'

import FormMarker from './FormMarker'
import { Sidebar } from '../Components'

const MapSidebar = ({ sidebar, toggleSidebar }) => (
  <Sidebar 
    isActive={sidebar && sidebar === 'bookmark'} 
    onClick={toggleSidebar}
    header="sezione inserimento"
  >
    <FormContainer>
      <FormMarker />
    </FormContainer>
  </Sidebar>
)



const FormContainer = styled.div`
`


const mapStateToProps = (state) => ({
  sidebar: state.sidebar,
})


export default connect(
  mapStateToProps,
  actions,
)(MapSidebar)
