import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import Loadable from 'react-loadable';
import App from '~~containers/App';

const routesConfig = [
  {
    name: 'Hello',
    path: '/',
    component: Loadable({
      loader: () => import('~~components/Hello'),
      loading: () => <div>loading...</div>
    }),
    exact: true
  },
  {
    name: 'Hello',
    path: '/hello',
    component: Loadable({
      loader: () => import('~~components/Hello'),
      loading: () => <div>loading...</div>
    }),
    exact: true
  },
  {
    name: 'NotFound',
    path: null,
    component: Loadable({
      loader: () => import('~~components/NotFound'),
      loading: () => <div>loading...</div>
    })
  },
];

const Routes = () => (
  <App>
    {/* <Route component={asyncLoadBundle('App')} /> */}
    <Switch>
      {routesConfig.map((routeProps) => {
        const { path, component, name, ...rest } = routeProps;
        return <Route key={name} path={path} component={component} {...rest} />;
      })}
    </Switch>
  </App>
);

export default Routes;
