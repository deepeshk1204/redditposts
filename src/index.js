import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import './index.css';
import App from './container/App';
import Table from './container/Table';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// const store = createStore(reducers,{}, compose(window.devToolsExtension ? window.devToolsExtension() : f => f));

ReactDOM.render(
  <Root>
    <Router>
      <Route path="/" component={Table} />
    </Router>
  </Root>,
    document.getElementById('root')
  );

  serviceWorker.register();