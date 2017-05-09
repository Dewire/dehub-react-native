/* eslint-disable no-undef */
import 'rxjs/Rx';
import { ActionsObservable } from 'redux-observable';
import { logout } from '../../src/base/actions';
import logoutEpic from '../../src/base/app_epic';

let action$;
let store;
let mockNavigator;

beforeEach(() => {
  mockNavigator = {
    popToRoot: jest.fn(),
    resetTo: jest.fn(),
  };
  action$ = ActionsObservable.of(logout(mockNavigator));
});

describe('app epic', () => {
  describe('on logout action', () => {
    it('should call popToRoot on iOS', () => {
      logoutEpic(action$, store, { isIOS: true })
        .subscribe(() => {
          expect(mockNavigator.popToRoot.mock.calls.length).toBe(1);
          expect(mockNavigator.resetTo.mock.calls.length).toBe(0);
        });
    });

    it('should call resetTo on Android', () => {
      logoutEpic(action$, store, { isIOS: false })
        .subscribe(() => {
          expect(mockNavigator.popToRoot.mock.calls.length).toBe(0);
          expect(mockNavigator.resetTo.mock.calls.length).toBe(1);
        });
    });
  });
});
