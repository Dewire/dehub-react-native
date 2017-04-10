
import { Navigation } from 'react-native-navigation';
import LoginContainer from './login/login_container';
import GistsContainer from './gists/gists_container';

export const LOGIN_SCREEN = 'DeHub.LoginScreen';
export const GISTS_SCREEN = 'DeHub.GistsScreen';

function storeRegister(store, provider) {
  return (id, component) => Navigation.registerComponent(id, component, store, provider);
}

export function registerScreens(store, provider) {
  const register = storeRegister(store, provider);

  register(LOGIN_SCREEN, () => LoginContainer);
  register(GISTS_SCREEN, () => GistsContainer);
}
