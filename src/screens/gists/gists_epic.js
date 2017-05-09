
import { combineEpics } from 'redux-observable';
import { fetchComplete } from '../../base/actions';
import {
  GISTS_FETCH_DATA,
  GISTS_NAVIGATE_TO_VIEW_GIST,
  GISTS_NAVIGATE_TO_NEW_GIST,
 } from './gists_actions';
import { VIEW_GIST_SCREEN, NEW_GIST_SCREEN } from '../screenIdentifiers';
import { trackAndCatch, navigate } from '../../observables/observables';

const fetch = (action$, store, { api }) => (
  action$.ofType(GISTS_FETCH_DATA)
    .switchMap(action => (
      api.fetchGists({ noCache: true })
        .map(data => fetchComplete('gists', data))
        .let(trackAndCatch(action.type, action.payload))
    ))
);

const navigationView = action$ => (
  action$.ofType(GISTS_NAVIGATE_TO_VIEW_GIST)
    .let(navigate(VIEW_GIST_SCREEN))
);

const navigationNew = action$ => (
  action$.ofType(GISTS_NAVIGATE_TO_NEW_GIST)
    .let(navigate(NEW_GIST_SCREEN))
);

export default combineEpics(fetch, navigationView, navigationNew);
