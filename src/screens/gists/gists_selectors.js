
import { createSelector } from 'reselect';

export const gistsSelector = state => state.fetches.gists || [];

export const sectionsSelector = createSelector(
  gistsSelector,
  gists => (
    gists.reduce((acc, gist) => {
      const pos = gist.public ? 0 : 1;
      acc[pos].data.push(decorateGist(gist));
      return acc;
    },
      [
        { key: 'public', data: [] },
        { key: 'private', data: [] },
      ],
    )
  ),
);

function decorateGist(gist) {
  const first = Object.keys(gist.files)[0];
  return { ...gist, key: gist.id, firstFile: first };
}
