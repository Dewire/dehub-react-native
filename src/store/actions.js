
export const INCREMENT_SPIN_COUNT = 'INCREMENT_REQUEST_COUNT';
export const DECREMENT_SPIN_COUNT = 'DECREMENT_REQUEST_COUNT';
export const ERROR = 'ERROR';
export const LOGOUT = 'LOGOUT';
export const SET_NAVIGATOR = 'SET_NAVIGATOR';
export const FETCH_COMPLETE = 'FETCH_COMPLETE';
export const FETCH_GISTS = 'FETCH_GISTS';

export const nop = () => ({
  type: 'NOP',
});

export const setNavigator = navigator => ({
  type: SET_NAVIGATOR,
  payload: navigator,
});

export const logout = () => ({
  type: LOGOUT,
});

export const fetchComplete = (key, data) => ({
  type: FETCH_COMPLETE,
  payload: { key, data },
});
