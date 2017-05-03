/* eslint-disable no-undef */
import {
  isLoginButtonEnabledSelector,
  isLoginSpinnerActiveSelector,
} from '../../../src/screens/login/login_selectors';
import { LOGIN } from '../../../src/screens/login/login_actions';

const defaultState = () => ({
  login: {
    password: '',
    username: '',
    loggedIn: false,
  },
  app: {
    requestTrackings: { },
  },
});

let state;

beforeEach(() => (
  state = defaultState()
));

describe('login selectors', () => {
  describe('isLoginButtonEnabledSelector', () => {
    it('should return false when no username and password is entered', () => {
      const enabled = isLoginButtonEnabledSelector(state);
      expect(enabled).toBe(false);
    });

    it('should return false when only a username is entered', () => {
      state.login.username = 'Bob';
      const enabled = isLoginButtonEnabledSelector(state);
      expect(enabled).toBe(false);
    });

    it('should return false when only a password is entered', () => {
      state.login.password = 'secret';
      const enabled = isLoginButtonEnabledSelector(state);
      expect(enabled).toBe(false);
    });

    it('should return true when a password and username is present', () => {
      state.login.username = 'Bob';
      state.login.password = 'secret';
      const enabled = isLoginButtonEnabledSelector(state);
      expect(enabled).toBe(true);
    });

    it('should return false when the user is logged in', () => {
      state.login.loggedIn = true;
      let enabled = isLoginButtonEnabledSelector(state);
      expect(enabled).toBe(false);
      state.login.username = 'Bob';
      state.login.password = 'secret';
      enabled = isLoginButtonEnabledSelector(state);
      expect(enabled).toBe(false);
    });
  });

  describe('isLoginSpinnerActiveSelector', () => {
    it('should return true when the user is logged in', () => {
      state.login.loggedIn = true;
      const active = isLoginSpinnerActiveSelector(state);
      expect(active).toBe(true);
    });

    it('should return true when a login request is in progress', () => {
      state.app.requestTrackings[LOGIN] = true;
      const active = isLoginSpinnerActiveSelector(state);
      expect(active).toBe(true);
    });

    it('should return false when not logged in and no login request is in progress', () => {
      const active = isLoginSpinnerActiveSelector(state);
      expect(active).toBe(false);
    });
  });
});
