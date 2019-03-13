import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logOut } from '../../actions/auth';

const Logout = ({ logOut }) => {
  logOut();

  return <Redirect to="/" replace />;
};

const mapDispatchToProps = {
  logOut,
};

export default connect(
  undefined,
  mapDispatchToProps
)(Logout);
