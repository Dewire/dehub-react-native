
import { GISTS_SET_STATE } from './gists_actions';

const defaultState = {
  tappedGist: undefined,
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case GISTS_SET_STATE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
