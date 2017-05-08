/* eslint-disable no-undef */
import { Observable } from 'rxjs/Observable';
import { ActionsObservable } from 'redux-observable';
import { nop } from '../../../src/base/actions';
import loginEpic from '../../../src/screens/login/login_epic';
import { login, LOGIN_SET_STATE } from '../../../src/screens/login/login_actions';
import { mockStore } from '../../test_util';

const store = mockStore({
  login: {
    username: 'Bob Doe',
  },
});

const dependencies = {
  api: { },
};

let action$;

beforeEach(() => {
  action$ = ActionsObservable.of(login());
  dependencies.api.login = jest.fn().mockReturnValueOnce(Observable.of(nop()));
});

describe('login epic', () => {
  describe('on login action', () => {
    it('should call api.login() once with the username in the login state', () => {
      loginEpic(action$, store, dependencies)
        .subscribe(() => {
          expect(dependencies.api.login.mock.calls.length).toBe(1);
          expect(dependencies.api.login.mock.calls[0][0]).toBe(store.getState().login.username);
        });
    });

    it('should map successful logins to login set state actions', () => {
      loginEpic(action$, store, dependencies)
        .toArray()
        .subscribe((actions) => {
          const action = actions.find(a => a.type === LOGIN_SET_STATE);
          expect(action.type).toBe(LOGIN_SET_STATE);
          expect(action.payload).toEqual({ loggedIn: true });
        });
    });
  });
});
