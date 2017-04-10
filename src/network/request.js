
import base64 from 'base-64';
import { createSelector } from 'reselect';
import { store } from '../bootstrap';

export default function request(url, settings = {}) {
  const def = defaultSettings();
  return { url, ...def, ...settings };
}

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
