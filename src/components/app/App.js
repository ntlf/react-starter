import { Global } from '@emotion/core';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../../routes';
import { globalStyles } from '../../theme';
import PrivateRoute from '../auth/PrivateRoute';

const App = () => (
  <>
    <Global styles={globalStyles} />
    <Switch>
      <Redirect from="/" to="/home" exact />
      {publicRoutes.map((route, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <Route key={i} {...route} />
      ))}
      {privateRoutes.map((route, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <PrivateRoute key={i} {...route} />
      ))}
    </Switch>
  </>
);

export default App;
