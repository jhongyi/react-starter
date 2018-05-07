import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux';

// import reducers from '~~reducers';

// import middlewares from '~~middlewares';

export default function configureStore(history) {
  // Build the middleware for intercepting and dispatching navigation actions
  const routerMiddleware = createRouterMiddleware(history);
  let composeEnhancers = compose;
  if (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  }

//   const enhancers = composeEnhancers(applyMiddleware(...middlewares, routerMiddleware));
//   const store = createStore(reducers, enhancers);

//   if (module.hot) {
//     // Enable Webpack hot module replacement for reducers
//     module.hot.accept('../reducers', () => {
//       const nextRootReducer = require('../reducers/index');
//       store.replaceReducer(nextRootReducer);
//     });
//   }
//   return store;
}
