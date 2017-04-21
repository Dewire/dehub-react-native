
import base64 from 'base-64';
import { createSelector } from 'reselect';
import { store } from '../bootstrap';

const API_BASE = 'https://api.github.com';

export default function request(path, settings = {}) {
  const def = defaultSettings();
  const url = makeUrl(path);
  return { url, ...def, ...settings };
}

const makeUrl = (path) => {
  if (path.match(/^https?/)) {
    return path;
  }
  return `${API_BASE}/${path}`;
};

const defaultSettings = () => ({
  headers: defaultHeaders(),
  responseType: 'json',
});

const defaultHeaders = () => ({
  Authorization: basicAuthSelector(store.getState()),
});

const basicAuthSelector = createSelector(
  state => state.login.username,
  state => state.login.password,
  (username, password) => {
    const encoded = base64.encode(`${username}:${password}`);
    return `Basic ${encoded}`;
  },
);
