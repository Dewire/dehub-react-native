/* eslint immutable/no-mutation: 2 */
import { LOGOUT } from '../../base/actions';
import { LOGIN_SET_STATE } from './login_actions';

const defaultState = {
  username: '',
  password: '',
  loggedIn: false,
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case LOGIN_SET_STATE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
