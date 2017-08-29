/* eslint immutable/no-mutation: 2 */
import {
  TRACK_REQUEST_ACTIVE,
  TRACK_REQUEST_INACTIVE,
  CLEAR_COMPLETED_REQUEST,
  CLEAR_REQUEST_ERROR,
} from './actions';
import { falsyToNull } from '../util/utils';

const defaultState = {
  // Keeps track of the requests that are currently in progress. When a request of a given
  // action type is in progress a key with the name of the action type will be set to a metadata
  // (or empty) object. This indicates that the request is in progress. When the request completes
  // (either successfully or due to an error), the value is set to a falsy value. This indicates
  // that no request is in progress.
  requestTrackings: { },
  // Keeps track of the LATEST request of a given action type that finished (either successfully
  // or due to an error). The value for a key (an action type) is an object with a key 'error'
  // that is set to false if there was no error, or set to the request error.
  completedRequests: { },
  // Keeps track of the latest request error that happened.
  requestError: null,
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case TRACK_REQUEST_ACTIVE:
      return setTracking(state, action.payload, true);

    case TRACK_REQUEST_INACTIVE: {
      const completedRequests = setCompleted(state, action.payload);
      const withError = setError(completedRequests, action.payload.error);
      return setTracking(withError, action.payload, false);
    }

    case CLEAR_COMPLETED_REQUEST:
      return setCompleted(state, action.payload, true);

    case CLEAR_REQUEST_ERROR:
      return setError(state, null);

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

function setCompleted(state, { actionType, error }, clear) {
  return {
    ...state,
    completedRequests: {
      ...state.completedRequests,
      [actionType]: completedValue(error, clear),
    },
  };
}

function completedValue(error, clear) {
  if (clear) return undefined;
  if (error) return { error };
  return { error: false };
}

function setError(state, error) {
  return {
    ...state,
    requestError: falsyToNull(error),
  };
}
