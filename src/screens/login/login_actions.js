
export const LOGIN = 'LOGIN';
export const LOGIN_SET_STATE = 'LOGIN_SET_STATE';
export const LOGIN_NAVIGATE_TO_GISTS = 'LOGIN_NAVIGATE_TO_GISTS';

export const login = () => ({
  type: LOGIN,
});

export const setState = state => ({
  type: LOGIN_SET_STATE,
  payload: state,
});

export const navigateToGists = loginState => ({
  type: LOGIN_NAVIGATE_TO_GISTS,
  payload: loginState,
});
