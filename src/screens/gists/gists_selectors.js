
import { createSelector } from 'reselect';
import languageColors from '../../styles/language_colors';
import * as globalStyles from '../../styles/global';

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
      { key: 'PUBLIC', data: [] },
      { key: 'PRIVATE', data: [] },
    ],
    )
  ),
);

function decorateGist(gist) {
  const firstFileName = Object.keys(gist.files)[0];
  const firstFile = gist.files[firstFileName];
  return {
    ...gist,
    key: gist.id,
    firstFileName,
    firstFile: { ...firstFile, color: itemColor(firstFile) },
  };
}

function itemColor(file) {
  const lang = languageColors[file.language];
  return lang ? (lang.color || globalStyles.TEXT_COLOR) : globalStyles.TEXT_COLOR;
}
