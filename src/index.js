import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { HashRouter as Router } from 'react-router-dom'

import { compose, withProps } from 'recompose'
import { withScriptjs } from 'react-google-maps'

import configureStore from './redux/configureStore'
import Pages from './Pages'
import theme from './theme'

import registerServiceWorker from './registerServiceWorker';

const testState = {
  mapCenter: {
    lat: 45,
    lng: 9,
    zoom: 9,
    address: null,
    loading: false,
  }
}

const App = (testState) => {
  return (
    <Provider store={configureStore()}>
      <ThemeProvider theme={theme}>
        <Router>
          <Pages />
        </Router>
      </ThemeProvider>
    </Provider>
  )
}

const WithGoogleMapsGlobal = compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?v=3exp&libraries=geometry,drawing,places&key=AIzaSyCRSPvbD_ZxxapenKL0T7KuhodJfmuSe9o',
    loadingElement: () => <div>Loading</div>,
  }),
  withScriptjs,
)(App)

ReactDOM.render(<WithGoogleMapsGlobal />, document.getElementById('root'));

registerServiceWorker();


