/* eslint-disable no-undef */
import 'rxjs/Rx';
import { ActionsObservable } from 'redux-observable';
import { logout } from '../../src/base/actions';
import logoutEpic from '../../src/base/app_epic';
import { isIOS } from '../../src/util/platform';

let action$;
let store;

const mockNavigator = {
  popToRoot: jest.fn(),
  resetTo: jest.fn(),
};

beforeEach(() => {
  action$ = ActionsObservable.of(logout(mockNavigator));
});

describe('app epic', () => {
  describe('on logout action', () => {
    it('should call popToRoot on iOS and resetTo on Android and go to the login screen', () => {
      logoutEpic(action$, store)
        .subscribe(() => {
          if (isIOS) {
            expect(mockNavigator.popToRoot.mock.calls.length).toBe(1);
          } else {
            expect(mockNavigator.resetTo.mock.calls.length).toBe(1);
          }
        });
    });
  });
});
