
import { fetchComplete } from '../../base/actions';
import { GISTS_FETCH_DATA } from './gists_actions';
import { track, error } from '../../observables/observables';

export default (action$, store, { api }) => (
  action$.ofType(GISTS_FETCH_DATA)
    .switchMap(action => (
      api.fetchGists({ noCache: true })
        .map(data => fetchComplete('gists', data))
        .let(error())
        .let(track(action.type, action.payload))
    ))
);
