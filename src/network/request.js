
import base64 from 'base-64';
import { createSelector } from 'reselect';
import { store } from '../bootstrap';

const API_BASE = 'https://api.github.com';

/**
 * request - constructs an RxJS ajax request object.
 *
 * @param {string} path          The path that the request should use. This can be a relative path
 * in which case it is appended to API_BASE (along with a leading /), or it can be an absolute URL,
 * in which case it is used as is.
 * @param {object} [settings={}] An object containing all the settings for the request. For example
 * the response type (text, json, etc) and the request headers.
 * The settings object can contain the following properties as defined by the RxJS ajax
 * documentation: {@link https://github.com/Reactive-Extensions/RxJS-DOM/blob/master/doc/operators/ajax.md}
 *
 *   async (Boolean): Whether the request is async. The default is true.
 *   body (Object): Optional body
 *   crossDomain (Boolean): true if to use CORS, else false. The default is false.
 *   withCredentials (Boolean): true if to use CORS withCredentials, else false.
 *                             The default is false.
 *   headers (Object): Optional headers
 *   method (String): Method of the request, such as GET, POST, PUT, PATCH, DELETE.
 *                   The default is GET.
 *   password (String): The password for the request.
 *   progressObserver (Observer): An optional Observer which listen to XHR2
 *                                progress events or error timeout values.
 *   responseType (String): The response type. Either can be 'json', 'text' or 'blob'.
 *                          The default is 'text'.
 *   timeout: Number - a number representing the number of milliseconds a request can take
 *            before automatically being terminated. A value of 0 (which is the default)
 *            means there is no timeout.
 *   url (String): URL of the request
 *   user (String): The user for the request.
 *
 * Additionally, other properties may be present in the settings object. They are:
 *   additionalHeaders (Object): The request() function defines some default headers that will
 *                               present on all requests. They can be overriden by setting the
 *                               headers property. If the additionalHeaders property is set,
 *                               the headers in this object will be merged with the default headers.
 *   noCache (Boolean): If this is set to true, a "Cache-Control: no-cache" header is added to the
 *                      request headers.
 *
 * @returns {object} a request object that can be used with the RxJS ajax() function.
 */
export default function request(path, settings = {}) {
  const url = makeUrl(path);
  const def = defaultSettings();
  const req = { url, ...def, ...processSettings(settings) };
  req.headers = { ...req.headers, ...(req.additionalHeaders || {}) };
  delete req.additionalHeaders;
  return req;
}

const processSettings = (settings = {}) => {
  const { noCache, ...other } = settings;
  if (other.additionalHeaders === undefined) other.additionalHeaders = {};
  if (noCache) other.additionalHeaders['Cache-Control'] = 'no-cache';
  return other;
};

const makeUrl = (path) => {
  if (path.match(/^https?:\/\//)) {
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
