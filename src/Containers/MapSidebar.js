import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { tween, styler } from 'popmotion'

import * as actions from '../redux/sidebar/actions'

import FormMarker from './FormMarker'
import { Sidebar } from '../Components'

class MyTween extends React.Component {

  constructor(props){

    super(props)
    this.activateTween = this.activateTween.bind(this)

    this.tween = tween({
      from: { x: 0, scale: 1 },
      to: { x: 300, scale: 2 },
      flip: Infinity,
      duration: 1000
    })

    this.setBallStyler = ball => this.ballStyler = ball && styler(ball)

  }

  activateTween() {
    this.tween.start(this.ballStyler.set)   
  }

  render() {

    return (
      <div>
        <p onClick={this.activateTween}> clicca qui </p>

        <Ball 
          innerRef={this.setBallStyler}
        />  
      </div>
    )

  }

}

const Ball = styled.div`
  border: 1px solid red;
  background-color: red;
  height: 50px;
  width: 50px;
  border-radius:50%;
`



const MapSidebar = ({ sidebar, toggleSidebar }) => (
  <Sidebar 
    isActive={sidebar && sidebar === 'bookmark'} 
    onClick={toggleSidebar}
    header="sezione inserimento"
  >
    <FormContainer>
      <FormMarker />
    </FormContainer>
    <MyTween />
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
