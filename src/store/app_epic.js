
import { nop, LOGOUT } from './actions';

const logout = (action$, store) => (
  action$.ofType(LOGOUT)
    .map(() => {
      store.getState().app.navigator.popToRoot({
        animated: true,
      });
      return nop();
    })
);

export default logout;
