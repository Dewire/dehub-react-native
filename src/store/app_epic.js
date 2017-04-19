
import { combineEpics } from 'redux-observable';
import { nop, NAVIGATE, LOGOUT } from './actions';

const navigate = (action$, store) => (
  action$.ofType(NAVIGATE)
    .map((navigation) => {
      navigation.payload(store.getState().app.navigator);
      return nop();
    })
);

const logout = (action$, store) => (
  action$.ofType(LOGOUT)
    .map(() => {
      store.getState().app.navigator.popToRoot({
        animated: true,
      });
      return nop();
    })
);

export default combineEpics(navigate, logout);
