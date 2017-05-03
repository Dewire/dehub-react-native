
import { LOGIN, LOGIN_SET_STATE } from './login_actions';
import { track, error } from '../../observables/observables';

export default (action$, store, { api }) => (
  action$.ofType(LOGIN)
    .throttleTime(1000)
    .switchMap(() => (
      api.login(store.getState().login.username)
        .map(() => ({
          type: LOGIN_SET_STATE,
          payload: { loggedIn: true },
        }))
        .let(error())
        .let(track(LOGIN))
    ))
);
