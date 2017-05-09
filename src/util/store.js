
import { store } from '../bootstrap';
import { clearCompletedRequest } from '../base/actions';

export function popCompletedRequest(actionType) {
  const completed = store.getState().app.completedRequests[actionType];
  if (completed) {
    store.dispatch(clearCompletedRequest(actionType));
  }
  return completed;
}

export function hasCompletedRequestWithoutError(actionType) {
  const req = popCompletedRequest(actionType);
  return req && !req.error;
}
