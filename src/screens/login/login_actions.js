
export const LOGIN = 'LOGIN';
export const LOGIN_SET_STATE = 'LOGIN_SET_STATE';

export const login = () => ({
  type: LOGIN,
});

export const setState = state => ({
  type: LOGIN_SET_STATE,
  payload: state,
});
