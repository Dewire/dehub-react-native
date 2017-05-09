
import { createSelector } from 'reselect';
import { isActiveRequestSelector } from '../../base/selectors';
import { VIEW_GIST_FETCH_DATA } from './view_gist_actions';

export const selectedGistSelector = state => state.gists.tappedGist;

export const gistFetchSelector = state => state.viewGist.gistFetch;

export const showLoadingSelector = createSelector(
  selectedGistSelector,
  gistFetchSelector,
  isActiveRequestSelector(VIEW_GIST_FETCH_DATA),
  (selectedGist, gistFetch, tracking) => {
    if (gistFetch) {
      return (gistFetch.rawUrl !== selectedGist.firstFile.raw_url) && tracking;
    }
    return tracking;
  },
);

export const gistTextSelector = createSelector(
  selectedGistSelector,
  gistFetchSelector,
  (selectedGist, gistFetch) => {
    if (gistFetch) {
      return gistFetch.rawUrl === selectedGist.firstFile.raw_url ? gistFetch.text : '';
    }
    return '';
  },
);
