import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { hot } from 'react-hot-loader';
import { history } from '~~store';

import Routes from './routes';

const App = () => (
  <Router>
    <Routes />
  </Router>
);

hot(module)(App);

ReactDOM.render(<App />, document.querySelector('#app'));
