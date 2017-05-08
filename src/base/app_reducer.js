/* eslint immutable/no-mutation: 2 */
import {
  TRACK_REQUEST_ACTIVE, TRACK_REQUEST_INACTIVE,
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
