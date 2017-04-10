
import { ajax } from 'rxjs/observable/dom/ajax';
import request from '../../network/request';
import { spin, error } from '../../observables/observables';
import { LOGIN, LOGIN_SET_STATE } from './login_actions';

export default (action$, store) => (
  action$.ofType(LOGIN)
    .throttleTime(1000)
    .switchMap(() => (
      tryLogin(store.getState())
        .map(() => ({
          type: LOGIN_SET_STATE,
          payload: { loggedIn: true },
        }))
        .let(error).let(spin)
    ))
);

function tryLogin(state) {
  const url = `https://api.github.com/users/${state.login.username}/gists`;
  return ajax(request(url));
}
