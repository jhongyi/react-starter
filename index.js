import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { hot } from 'react-hot-loader';
import { history, store } from '~~store';

import Routes from './routes';

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Router>
        <Routes />
      </Router>
    </ConnectedRouter>
  </Provider>
);

hot(module)(App);

ReactDOM.render(<App />, document.querySelector('#app'));
