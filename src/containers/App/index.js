import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import PrivateRoute from '../../components/PrivateRoute';
import { privateRoutes, publicRoutes } from '../../routes';

const App = () => (
  <Router>
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
  </Router>
);

export default App;
