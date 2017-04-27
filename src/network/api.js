
import { ajax } from 'rxjs/observable/dom/ajax';
import request from './request';

const ajaxObservable = (url, options = {}) => (
  ajax(request(url, options))
);

export default {

  login(username, options) {
    return ajaxObservable(`users/${username}/gists`, options);
  },

  fetchGists(options) {
    return ajaxObservable('gists', options);
  },

  fetch(url, options) {
    return ajaxObservable(url, options);
  },
};
