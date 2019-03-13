import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logIn } from '../../actions/auth';
import Content from '../common/Content';

const Login = ({ token, location, logIn }) => {
  if (token) {
    const { from } = location.state || { from: { pathname: '/' } };

    return <Redirect to={from} push />;
  }

  return (
    <Content>
      <button type="button" onClick={() => logIn()}>
        Login
      </button>
    </Content>
  );
};

const mapStateToProps = state => ({
  token: state.auth.token,
});

const mapDispatchToProps = {
  logIn,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
