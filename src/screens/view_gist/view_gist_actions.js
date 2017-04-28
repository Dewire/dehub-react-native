
export const VIEW_GIST_FETCH_DATA = 'VIEW_GIST_FETCH_DATA';
export const VIEW_GIST_SET_STATE = 'VIEW_GIST_SET_STATE';

export const fetchData = rawUrl => ({
  type: VIEW_GIST_FETCH_DATA,
  payload: { rawUrl },
});
