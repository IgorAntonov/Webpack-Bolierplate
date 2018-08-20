import { createStore, applyMiddleware } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import { rootReducer } from './ducks';

export const configureStore = ({ history, initialState = {} }) => {
  const connectedRouter = connectRouter(history);
  const middlewares = [
    thunkMiddleware,
    routerMiddleware(history)
  ];

  if (process.env.NODE_ENV === 'development') {
    const logger = createLogger({ collapsed: true });
    middlewares.push(logger);
  }

  return createStore(
    connectedRouter(rootReducer),
    initialState,
    applyMiddleware(...middlewares)
  );
};
