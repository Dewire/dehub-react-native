
import { Navigation } from 'react-native-navigation';
import LoginContainer from './login/login_container';
import GistsContainer from './gists/gists_container';
import ViewGistContainer from './view_gist/view_gist_container';

export const LOGIN_SCREEN = 'DeHub.LoginScreen';
export const GISTS_SCREEN = 'DeHub.GistsScreen';
export const VIEW_GIST_SCREEN = 'DeHub.ViewGistScreen';

function storeRegister(store, provider) {
  return (id, component) => Navigation.registerComponent(id, component, store, provider);
}

export function registerScreens(store, provider) {
  const register = storeRegister(store, provider);

  register(LOGIN_SCREEN, () => LoginContainer);
  register(GISTS_SCREEN, () => GistsContainer);
  register(VIEW_GIST_SCREEN, () => ViewGistContainer);
}
