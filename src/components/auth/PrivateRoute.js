import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, token, ...rest }) => {
  const isAuthenticated = !!token;

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

const mapStateToProps = state => ({
  token: state.auth.token,
});

export default connect(mapStateToProps)(PrivateRoute);
