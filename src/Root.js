import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
// import stateValidator from 'middlewares/stateValidator';
import reducers from './reducers';
// const store = createStore(reducers,{}, compose(window.devToolsExtension ? window.devToolsExtension() : f => f));

export default ({ children, initialState = {} }) => {
  const store = createStore(
    reducers,
    initialState,
    compose(
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    // applyMiddleware(async, stateValidator)
  );

  return <Provider store={store}>{children}</Provider>;
};
