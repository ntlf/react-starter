import { createAction } from 'redux-starter-kit';
import { postLogin } from '../api/auth';

export const loggedIn = createAction('LOGGED_IN');

export const logIn = (username, password) => async dispatch => {
  const token = await postLogin(username, password);
  dispatch(loggedIn(token));
};

export const loggedOut = createAction('LOGGED_OUT');

export const logOut = () => async dispatch => {
  dispatch(loggedOut());
};
