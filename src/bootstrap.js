
import { Navigation } from 'react-native-navigation';
import { registerScreens, LOGIN_SCREEN } from './screens/screens';

export default function runApp() {
  registerScreens();

  Navigation.startSingleScreenApp({
    screen: {
      screen: LOGIN_SCREEN,
      title: 'Login',
    },
  });
}
