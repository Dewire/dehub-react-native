
import Rx from 'rxjs';
import {
  TRACK_REQUEST_ACTIVE,
  TRACK_REQUEST_INACTIVE,
  ERROR,
}
from '../store/actions';

export const track = (actionType, metadata = {}, enabled = true) => (
  (source) => {
    if (!enabled) return source;
    return Rx.Observable.concat(
      Rx.Observable.of({
        type: TRACK_REQUEST_ACTIVE,
        payload: { actionType, metadata },
      }),
      source,
      Rx.Observable.of({
        type: TRACK_REQUEST_INACTIVE,
        payload: { actionType },
      }),
    );
  }
);

export const error = (enabled = true) => (
  (source) => {
    if (!enabled) return source;
    return source.catch(e => (
      Rx.Observable.of({
        type: ERROR,
        payload: e,
      })
    ));
  }
);
