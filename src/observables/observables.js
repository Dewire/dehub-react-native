
import Rx from 'rxjs';
import {
  INCREMENT_SPIN_COUNT,
  DECREMENT_SPIN_COUNT,
  ERROR,
}
from '../store/actions';

export function spin(source) {
  return Rx.Observable.concat(
    Rx.Observable.of({
      type: INCREMENT_SPIN_COUNT,
    }),
    source,
    Rx.Observable.of({
      type: DECREMENT_SPIN_COUNT,
    }),
  );
}

export function error(source) {
  return source.catch(e => (
    Rx.Observable.of({
      type: ERROR,
      payload: e,
    })
  ));
}
