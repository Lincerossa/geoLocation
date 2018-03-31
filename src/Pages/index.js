import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { compose } from 'recompose'
import { Login } from '../Containers'

import Root from './Root'
import Map from './Map'

import { WithLayout, WithAuth } from '../hoc'


const Pages = (props) => (
  <Switch>
    <Route exact path='/' component={() => <Root {...props} />} />
    <Route exact path='/map' component={WithLayout(() => <Map {...props} />)} />
    <Route path='/callback' component={() => <Root {...props} />} />
  </Switch>
)

export default compose(
  withRouter,
  WithAuth,
)(Pages)