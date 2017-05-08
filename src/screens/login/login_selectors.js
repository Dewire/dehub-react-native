
import { createSelector } from 'reselect';
import { requestActiveSelector } from '../../base/selectors';
import { LOGIN } from './login_actions';

export const loggedInSelector = state => state.login.loggedIn;
export const passwordSelector = state => state.login.password;
export const usernameSelector = state => state.login.username;

export const isLoginButtonEnabledSelector = createSelector(
  loggedInSelector,
  passwordSelector,
  usernameSelector,
  (loggedIn, password, username) => (
    !loggedIn && password.length > 0 && username.length > 0
  ),
);

export const isLoginSpinnerActiveSelector = createSelector(
  loggedInSelector,
  requestActiveSelector(LOGIN),
  (loggedIn, loginActive) => !!(loggedIn || loginActive),
);
