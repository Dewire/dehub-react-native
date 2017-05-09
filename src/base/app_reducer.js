/* eslint immutable/no-mutation: 2 */
import {
  TRACK_REQUEST_ACTIVE, TRACK_REQUEST_INACTIVE, CLEAR_COMPLETED_REQUEST,
} from './actions';

const defaultState = {
  // Keeps track of the requests that are currently in progress. When a request of a given
  // action type is in progress a key with the name of action type will be set to a metadata
  // (or empty) object. This indicates that the request is in progress. When the request completes
  // (either successfully or due to an error), the value is set to a falsy value. This indicates
  // that no request is in progress.
  requestTrackings: { },
  // Keeps track of the LATEST request of a given action type that finished (either successfully
  // or due to an error).
  completedRequests: { },
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {

    case TRACK_REQUEST_ACTIVE:
      return setTracking(state, action.payload, true);

    case TRACK_REQUEST_INACTIVE: {
      const completedRequests = setCompleted(state, action.payload);
      return setTracking(completedRequests, action.payload, false);
    }

    case CLEAR_COMPLETED_REQUEST:
      return setCompleted(state, action.payload);

    default:
      return state;
  }
};

function setTracking(state, { actionType, metadata }, activated) {
  return {
    ...state,
    requestTrackings: {
      ...state.requestTrackings,
      [actionType]: activated ? metadata : null,
    },
  };
}

function setCompleted(state, { actionType, error }) {
  return {
    ...state,
    completedRequests: {
      ...state.completedRequests,
      [actionType]: (error === undefined || error === null) ? null : { error },
    },
  };
}
