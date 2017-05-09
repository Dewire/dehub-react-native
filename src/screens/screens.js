
import { Navigation } from 'react-native-navigation';
import LoginContainer from './login/login_container';
import GistsContainer from './gists/gists_container';
import ViewGistContainer from './view_gist/view_gist_container';
// We need to have the screen identifiers in a separate file so they can be imported in the
// unit tests without importing React components.
import {
  LOGIN_SCREEN,
  GISTS_SCREEN,
  VIEW_GIST_SCREEN,
} from './screenIdentifiers';

function storeRegister(store, provider) {
  return (id, component) => Navigation.registerComponent(id, component, store, provider);
}

export default function registerScreens(store, provider) {
  const register = storeRegister(store, provider);

  register(LOGIN_SCREEN, () => LoginContainer);
  register(GISTS_SCREEN, () => GistsContainer);
  register(VIEW_GIST_SCREEN, () => ViewGistContainer);
}
