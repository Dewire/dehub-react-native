/* eslint immutable/no-mutation: 2 */
import {
  FETCH_COMPLETE, FETCH_COMPLETE_ADD_ITEM,
} from './actions';

export default (state = { }, action = {}) => {
  switch (action.type) {
    case FETCH_COMPLETE: {
      const { key, data } = action.payload;
      return { ...state, [key]: data.response };
    }
    case FETCH_COMPLETE_ADD_ITEM: {
      const { key, data, prepend } = action.payload;
      if (!Array.isArray(state[key])) {
        throw new Error('value of key in state for FETCH_COMPLETE_ADD_ITEM must be an array');
      }
      const { [key]: currentItems, ...rest } = state;
      const newArray = prepend
        ? [data.response, ...currentItems]
        : [...currentItems, data.response];
      return { ...rest, [key]: newArray };
    }
    default:
      return state;
  }
};
