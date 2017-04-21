
import api from '../../network/api';
import { spin, error } from '../../observables/observables';
import { LOGIN, LOGIN_SET_STATE } from './login_actions';

export default (action$, store) => (
  action$.ofType(LOGIN)
    .throttleTime(1000)
    .switchMap(() => (
      api.login(store.getState().login.username)
        .map(() => ({
          type: LOGIN_SET_STATE,
          payload: { loggedIn: true },
        }))
        .let(error).let(spin)
    ))
);
