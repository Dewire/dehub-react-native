/* eslint-disable no-undef */
import 'rxjs/Rx';
import { ActionsObservable } from 'redux-observable';
import { logout } from '../../src/store/actions';
import logoutEpic from '../../src/store/app_epic';
import { isIOS } from '../../src/util/platform';
import { mockStore } from '../test_util';

let action$;
let store;

beforeEach(() => {
  action$ = ActionsObservable.of(logout());
  store = mockStore({
    app: {
      navigator: {
        popToRoot: jest.fn(),
        resetTo: jest.fn(),
      },
    },
  });
});

describe('app epic', () => {
  describe('on logout action', () => {
    it('should call popToRoot on iOS and resetTo on Android and go to the login screen', () => {
      logoutEpic(action$, store)
        .subscribe(() => {
          if (isIOS) {
            expect(store.getState().app.navigator.popToRoot.mock.calls.length).toBe(1);
          } else {
            expect(store.getState().app.navigator.resetTo.mock.calls.length).toBe(1);
          }
        });
    });
  });
});
