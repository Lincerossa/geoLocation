import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import reducers from './reducers'

const composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const middleware = [
  thunk,
]

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
  // other store enhancers if any
)

export default (initialState) => createStore(reducers, initialState, enhancer)