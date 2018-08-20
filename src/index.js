// Add polyfills here or to the entry point in webpack config, if they will be too much
import 'core-js/fn/promise';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import 'normalize.css';

import { HotApp as App } from './app';
import { configureStore } from './store';

const history = createBrowserHistory();
const store = configureStore({ history });

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
