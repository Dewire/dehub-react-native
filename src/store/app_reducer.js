
import {
  INCREMENT_SPIN_COUNT,
  DECREMENT_SPIN_COUNT,
  SET_NAVIGATOR,
} from './actions';

const defaultState = {
  spinCount: 0,
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case INCREMENT_SPIN_COUNT:
      return { ...state, spinCount: state.spinCount + 1 };
    case DECREMENT_SPIN_COUNT:
      return { ...state, spinCount: state.spinCount - 1 };
    case SET_NAVIGATOR:
      return { ...state, navigator: action.payload };
    default:
      return state;
  }
};
