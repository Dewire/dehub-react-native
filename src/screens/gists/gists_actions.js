
export const GISTS_FETCH_DATA = 'GISTS_FETCH_DATA';
export const GISTS_SET_STATE = 'GISTS_SET_STATE';

export const setState = state => ({
  type: GISTS_SET_STATE,
  payload: state,
});

export const fetchData = isRefresh => ({
  type: GISTS_FETCH_DATA,
  payload: { isRefresh },
});
