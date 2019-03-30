import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import './index.css';
import DataTable from './container/DataTable';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// const store = createStore(reducers,{}, compose(window.devToolsExtension ? window.devToolsExtension() : f => f));

ReactDOM.render(
  <Root>
    <Router>
      <Route path="/" component={DataTable} />
    </Router>
  </Root>,
    document.getElementById('root')
  );

  serviceWorker.register();