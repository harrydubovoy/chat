import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux'
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './reducers'

const configureStore = ({ initialState, history }) => {
  const middleware = [
    thunk.withExtraArgument(history),
    routerMiddleware(history),
    logger,
  ];

  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware))
  );
};

export default configureStore;