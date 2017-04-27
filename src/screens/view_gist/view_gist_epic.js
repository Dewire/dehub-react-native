
import api from '../../network/api';
import { spin, error } from '../../observables/observables';
import { VIEW_GIST_FETCH_DATA, VIEW_GIST_SET_STATE } from './view_gist_actions';

export default action$ => (
  action$.ofType(VIEW_GIST_FETCH_DATA)
    .switchMap(action => (
      api.fetch(action.payload, { responseType: 'text' })
        .map(data => ({
          type: VIEW_GIST_SET_STATE,
          payload: { url: action.payload, text: data.response },
        }))
        .let(error).let(spin)
    ))
);
