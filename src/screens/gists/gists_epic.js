
import api from '../../network/api';
import { fetchComplete } from '../../store/actions';
import { spin, error } from '../../observables/observables';
import { GISTS_FETCH_DATA } from './gists_actions';

export default action$ => (
  action$.ofType(GISTS_FETCH_DATA)
    .switchMap(() => (
      api.fetchGists()
        .map(data => fetchComplete('gists', data))
        .let(error).let(spin)
    ))
);
