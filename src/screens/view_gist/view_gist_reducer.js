
import { VIEW_GIST_SET_STATE } from './view_gist_actions';

const defaultState = {
  gistFetch: undefined,
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case VIEW_GIST_SET_STATE:
      return { ...state, gistFetch: action.payload };
    default:
      return state;
  }
};
