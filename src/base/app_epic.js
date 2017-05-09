
import { nop, LOGOUT } from './actions';
import { LOGIN_SCREEN } from '../screens/screenIdentifiers';

const logout = (action$, store, { isIOS }) => (
  action$.ofType(LOGOUT)
    .map((action) => {
      // On iOS, resetting the root view controller cases a visual glitch that does not happen
      // on Android, so instead of resetting we popToRoot on iOS. We only have to reset on
      // Android anyway in order to prevent the hardware back button from going back to the
      // login screen. See componentWillReceiveProps in LoginComponent.
      const command = isIOS ? 'popToRoot' : 'resetTo';
      action.payload.navigator[command]({
        screen: LOGIN_SCREEN,
        animated: true,
      });
      return nop();
    })
);

export default logout;
