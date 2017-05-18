
import { store } from '../bootstrap';
import { clearCompletedRequest, clearRequestError } from '../base/actions';

/**
 * popCompletedRequest - Returns the value of the last completed request for the action type, and
 * then dispatches an event that removes the value for the completed request.
 *
 * @param {string} actionType the action type to returned the last completed request for.
 *
 * @returns {object|undefined} the value of the last completed request. An object with an
 * error key is returned if there was a completed request. The error key is set to false for
 * successful requests, otherwise it is set to the request error.
 * Undefined is returned if a last completed request does not exist.
 */
export function popCompletedRequest(actionType) {
  const completed = store.getState().app.completedRequests[actionType];
  if (completed) {
    store.dispatch(clearCompletedRequest(actionType));
  }
  return completed;
}

/**
 * hasCompletedRequestWithoutError - calls popCompletedRequest and returns true if the a completed
 * request existed and it was not an error.
 * @param {type} actionType the action type to check.
 *
 * @returns {type} true if the request exists and was successful.
 */
export function hasCompletedRequestWithoutError(actionType) {
  const req = popCompletedRequest(actionType);
  return req && !req.error;
}

/**
 * popError - Returnes the current error from state and then dispatches an action to clear the
 * current error.
 *
 * @returns {object|undefined} the error object or undefined if no error exists.
 */
export function popError() {
  const error = store.getState().app.requestError;
  if (error) {
    store.dispatch(clearRequestError());
  }
  return error;
}
