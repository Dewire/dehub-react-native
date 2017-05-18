
export const TRACK_REQUEST_ACTIVE = 'TRACK_REQUEST_ACTIVE';
export const TRACK_REQUEST_INACTIVE = 'TRACK_REQUEST_INACTIVE';
export const LOGOUT = 'LOGOUT';
export const FETCH_COMPLETE = 'FETCH_COMPLETE';
export const FETCH_COMPLETE_ADD_ITEM = 'FETCH_COMPLETE_ADD_ITEM';
export const FETCH_GISTS = 'FETCH_GISTS';
export const CLEAR_COMPLETED_REQUEST = 'CLEAR_COMPLETED_REQUEST';
export const CLEAR_REQUEST_ERROR = 'CLEAR_REQUEST_ERROR';

export const nop = () => ({
  type: 'NOP',
});

export const logout = navigator => ({
  type: LOGOUT,
  payload: { navigator },
});

export const fetchComplete = (key, data) => ({
  type: FETCH_COMPLETE,
  payload: { key, data },
});

// Assumes that the fetch data is an array of items and
// creates a new array with the given item appended.
export const fetchCompleteAddItem = (key, data, prepend = false) => ({
  type: FETCH_COMPLETE_ADD_ITEM,
  payload: { key, data, prepend },
});

export const clearCompletedRequest = actionType => ({
  type: CLEAR_COMPLETED_REQUEST,
  payload: { actionType },
});

export const clearRequestError = () => ({
  type: CLEAR_REQUEST_ERROR,
});
