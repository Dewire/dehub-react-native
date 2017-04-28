
import {
  FETCH_COMPLETE,
} from './actions';

export default (state = { }, action = {}) => {
  switch (action.type) {
    case FETCH_COMPLETE: {
      const { key, data } = action.payload;
      return { ...state, [key]: data.response };
    }
    default:
      return state;
  }
};
