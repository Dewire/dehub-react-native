import { fetchCompleteAddItem } from '../../base/actions';
import { NEW_GIST_CREATE_GIST } from './new_gist_actions';
import { createdGistSelector } from './new_gist_selectors';
import { trackAndCatch } from '../../observables/observables';

export default (action$, store, { api }) => (
  action$.ofType(NEW_GIST_CREATE_GIST)
    .throttleTime(200)
    .switchMap((action) => {
      const gist = createdGistSelector(store.getState());
      return api.createGist(gist)
        .map(data => fetchCompleteAddItem('gists', data, true))
        .let(trackAndCatch(action.type));
    })
);
