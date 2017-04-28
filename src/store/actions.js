
export const TRACK_REQUEST_ACTIVE = 'TRACK_REQUEST_ACTIVE';
export const TRACK_REQUEST_INACTIVE = 'TRACK_REQUEST_INACTIVE';
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
