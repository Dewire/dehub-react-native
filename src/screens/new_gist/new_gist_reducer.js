/* eslint immutable/no-mutation: 2 */
import { NEW_GIST_SET_STATE } from './new_gist_actions';

const defaultState = {
  title: '',
  content: '',
  isPrivate: false,
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case NEW_GIST_SET_STATE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
