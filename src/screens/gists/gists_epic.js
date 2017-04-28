
import api from '../../network/api';
import { fetchComplete } from '../../store/actions';
import { GISTS_FETCH_DATA } from './gists_actions';
import { track, error } from '../../observables/observables';

export default action$ => (
  action$.ofType(GISTS_FETCH_DATA)
    .switchMap(action => (
      api.fetchGists({ noCache: true })
        .map(data => fetchComplete('gists', data))
        .let(error())
        .let(track(action.type, action.payload))
    ))
);
