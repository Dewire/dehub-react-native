
import { combineEpics } from 'redux-observable';
import { nop } from '../../base/actions';
import { LOGIN, LOGIN_SET_STATE, LOGIN_NAVIGATE_TO_GISTS } from './login_actions';
import { GISTS_SCREEN } from '../screenIdentifiers';
import { trackAndCatch } from '../../observables/observables';

const login = (action$, store, { api }) => (
  action$.ofType(LOGIN)
    .throttleTime(1000)
    .switchMap(action => (
      api.login(store.getState().login.username)
        .map(() => ({
          type: LOGIN_SET_STATE,
          payload: { loggedIn: true },
        }))
        .let(trackAndCatch(action.type))
    ))
);

const navigation = (action$, store, { isIOS }) => (
  action$.ofType(LOGIN_NAVIGATE_TO_GISTS)
    .map((action) => {
      const { currentProps, nextProps, navigator } = action.payload;
      if (!currentProps.isLoggedIn && nextProps.isLoggedIn) {
        const command = isIOS ? 'push' : 'resetTo';
        navigator[command]({
          screen: GISTS_SCREEN,
          title: 'Gists',
        });
      }
      return nop();
    })
);

export default combineEpics(login, navigation);
