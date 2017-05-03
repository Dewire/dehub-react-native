/* eslint-disable no-undef */
import loginReducer from '../../../src/screens/login/login_reducer';
import { setState } from '../../../src/screens/login/login_actions';
import { logout } from '../../../src/store/actions';

describe('login reducer', () => {
  describe('on login set state', () => {
    it('should return a new object containing the new state', () => {
      const setStateAction = setState({ aKey: 'aValue' });
      const newState = loginReducer(undefined, setStateAction);
      expect(newState.aKey).toBe('aValue');
    });

    it('should revert to the default state when the user logs out', () => {
      const defaultState = loginReducer();
      const newState = loginReducer(defaultState, setState({ aKey: 'aValue' }));
      const revertedState = loginReducer(newState, logout());
      expect(revertedState).toEqual(defaultState);
    });
  });
});
