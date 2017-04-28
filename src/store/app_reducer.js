
import {
  TRACK_REQUEST_ACTIVE, TRACK_REQUEST_INACTIVE, SET_NAVIGATOR,
} from './actions';

const defaultState = {
  requestTrackings: { },
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case TRACK_REQUEST_ACTIVE:
      return setTracking(state, action.payload, true);
    case TRACK_REQUEST_INACTIVE:
      return setTracking(state, action.payload, false);
    case SET_NAVIGATOR:
      return { ...state, navigator: action.payload };
    default:
      return state;
  }
};

function setTracking(state, tracking, activated) {
  return {
    ...state,
    requestTrackings: {
      ...state.requestTrackings,
      [tracking.actionType]: activated ? tracking.metadata : null,
    },
  };
}
