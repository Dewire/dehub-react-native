
export const GISTS_FETCH_DATA = 'GISTS_FETCH_DATA';
export const GISTS_SET_STATE = 'GISTS_SET_STATE';
export const GISTS_NAVIGATE_TO_VIEW_GIST = 'GISTS_NAVIGATE_TO_VIEW_GIST';
export const GISTS_NAVIGATE_TO_NEW_GIST = 'GISTS_NAVIGATE_TO_NEW_GIST';

export const setState = state => ({
  type: GISTS_SET_STATE,
  payload: state,
});

export const fetchData = isRefresh => ({
  type: GISTS_FETCH_DATA,
  payload: { isRefresh },
});

export const navigateToViewGist = payload => ({
  type: GISTS_NAVIGATE_TO_VIEW_GIST,
  payload,
});

export const navigateToNewGist = payload => ({
  type: GISTS_NAVIGATE_TO_NEW_GIST,
  payload,
});
