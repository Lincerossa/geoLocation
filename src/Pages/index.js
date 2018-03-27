import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

import { Login } from '../Containers'

import Root from './Root'
import Map from './Map'

import withLayout from '../hoc/withLayout'


const Pages = () => (
  <Switch>
    <Route exact path='/' component={Root} />
    <Route exact path='/map' component={withLayout(Map)} />
    <Route path='/login' component={withLayout(Login)} />
  </Switch>
)

export default withRouter(Pages)