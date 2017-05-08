/* eslint-disable no-undef */
import loginReducer from '../../../src/screens/login/login_reducer';
import { setState } from '../../../src/screens/login/login_actions';
import { logout } from '../../../src/base/actions';

describe('login reducer', () => {
  describe('on login set state', () => {
    it('should return a new object containing the new state', () => {
      const setStateAction = setState({ aKey: 'aValue' });
      const newState = loginReducer(undefined, setStateAction);
      expect(newState.aKey).toBe('aValue');
    });
  });
});
