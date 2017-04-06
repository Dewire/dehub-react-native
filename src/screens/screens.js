
import { Navigation } from 'react-native-navigation';
import LoginScreen from './login/login-screen';

export const LOGIN_SCREEN = 'DeHub.LoginScreen';

function storeRegister(store, provider) {
  return (id, component) => Navigation.registerComponent(id, component);
}

export function registerScreens(store, provider) {
  const register = storeRegister(store, provider);

  register(LOGIN_SCREEN, () => LoginScreen);
}
