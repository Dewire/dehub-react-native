
import { combineEpics } from 'redux-observable';
import { fetchComplete, nop } from '../../base/actions';
import { GISTS_FETCH_DATA, GISTS_NAVIGATE_TO_VIEW_GIST } from './gists_actions';
import { VIEW_GIST_SCREEN } from '../screenIdentifiers';
import { track, error } from '../../observables/observables';

const fetch = (action$, store, { api }) => (
  action$.ofType(GISTS_FETCH_DATA)
    .switchMap(action => (
      api.fetchGists({ noCache: true })
        .map(data => fetchComplete('gists', data))
        .let(error())
        .let(track(action.type, action.payload))
    ))
);

const navigation = action$ => (
  action$.ofType(GISTS_NAVIGATE_TO_VIEW_GIST)
    .map((action) => {
      action.payload.navigator.push({
        screen: VIEW_GIST_SCREEN,
        title: action.payload.title,
      });
      return nop();
    })
);

export default combineEpics(fetch, navigation);
