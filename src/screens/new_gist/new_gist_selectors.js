
import { createSelector } from 'reselect';
import { isActiveRequestSelector } from '../../base/selectors';
import { NEW_GIST_CREATE_GIST } from './new_gist_actions';

export const titleSelector = state => state.newGist.title;
export const contentSelector = state => state.newGist.content;
export const isPrivateSelector = state => state.newGist.isPrivate;

export const createdGistSelector = createSelector(
  titleSelector,
  contentSelector,
  isPrivateSelector,
  (title, content, isPrivate) => ({
    public: !isPrivate,
    files: {
      [title]: {
        content,
      },
    },
  }),
);

export const isCreateButtonDisabledSelector = createSelector(
  titleSelector,
  contentSelector,
  isActiveRequestSelector(NEW_GIST_CREATE_GIST),
  (title, content, isRequestActive) => (
    isRequestActive || !title || !content
  ),
);
