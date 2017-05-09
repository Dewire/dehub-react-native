
import Rx from 'rxjs';
import {
  nop,
  TRACK_REQUEST_ACTIVE,
  TRACK_REQUEST_INACTIVE,
}
from '../base/actions';

/**
 * trackAndCatch - Wraps a network request observable to provide tracking and error handling.
 * The returned observable will first emit a TRACK_REQUEST_ACTIVE event, followed by the stream
 * in the source observable, followed by a TRACK_REQUEST_INACTIVE event with the error flag
 * set to false.
 * If an error occurs during the network request, an ERROR event is emitted, followed by
 * a TRACK_REQUEST_INACTIVE event with the error flag set to true.
 *
 * @param {string}  actionType     The Redux action type that was used to start the request.
 * @param {object}  [metadata={}]  An object with extra data about the request.
 * @param {boolean} [enabled=true] If false track will return the source observable unmodified.
 *
 * @returns {Rx.Observable} The wrapped obserable.
 */
export const trackAndCatch = (actionType, metadata = {}, enabled = true) => (
  (source) => {
    if (!enabled) return source;

    return Rx.Observable.concat(
      Rx.Observable.of({
        type: TRACK_REQUEST_ACTIVE,
        payload: { actionType, metadata },
      }),
      Rx.Observable.concat(
        source,
        Rx.Observable.of({
          type: TRACK_REQUEST_INACTIVE,
          payload: { actionType, error: false },
        }),
      ).catch(e => (
        Rx.Observable.of({
          type: TRACK_REQUEST_INACTIVE,
          payload: { actionType, error: e },
        })
      )),
    );
  }
);

export const navigate = screenIdentifier => (
  source => (
    source.map((action) => {
      const { navigator, ...rest } = action.payload;
      navigator.push({
        screen: screenIdentifier,
        ...rest,
      });
      return nop();
    })
  )
);
