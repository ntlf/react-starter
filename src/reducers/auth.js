import { createReducer } from 'redux-starter-kit';
import { loggedIn, loggedOut } from '../actions/auth';

const auth = createReducer(
  {
    token: '',
  },
  {
    [loggedIn]: (state, action) => ({
      ...state,
      token: action.payload,
    }),
    [loggedOut]: state => ({
      ...state,
      token: '',
    }),
  }
);

export default auth;
