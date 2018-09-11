import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';
import { privateRoutes, publicRoutes } from '../../routes';

const App = () => (
  <Switch>
    <Redirect from="/" to="/todos" exact />
    {publicRoutes.map((route, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <Route key={i} {...route} />
    ))}
    {privateRoutes.map((route, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <PrivateRoute key={i} {...route} />
    ))}
  </Switch>
);

export default App;
