
import 'rxjs/Rx';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import registerScreens from './screens/screens';
import { LOGIN_SCREEN } from './screens/screenIdentifiers';
import createStore from './base/create_store';

export const store = createStore();

export function runApp() {
  registerScreens(store, Provider);

  Navigation.startSingleScreenApp({
    screen: {
      screen: LOGIN_SCREEN,
      title: 'Login',
    },
  });
}
