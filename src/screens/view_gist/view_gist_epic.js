
import api from '../../network/api';
import { track, error } from '../../observables/observables';
import { VIEW_GIST_FETCH_DATA, VIEW_GIST_SET_STATE } from './view_gist_actions';

export default action$ => (
  action$.ofType(VIEW_GIST_FETCH_DATA)
    .switchMap((action) => {
      const { rawUrl } = action.payload;
      return api.fetch(rawUrl, { responseType: 'text' })
        .map(data => ({
          type: VIEW_GIST_SET_STATE,
          payload: { rawUrl, text: data.response },
        }))
        .let(error())
        .let(track(action.type));
    })
);
