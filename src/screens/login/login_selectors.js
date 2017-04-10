
import { createSelector } from 'reselect';

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
