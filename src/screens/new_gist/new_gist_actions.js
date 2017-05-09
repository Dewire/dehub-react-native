
export const NEW_GIST_SET_STATE = 'NEW_GIST_SET_STATE';
export const NEW_GIST_CREATE_GIST = 'NEW_GIST_CREATE_GIST';

export const setState = state => ({
  type: NEW_GIST_SET_STATE,
  payload: state,
});

export const createGist = () => ({
  type: NEW_GIST_CREATE_GIST,
});
