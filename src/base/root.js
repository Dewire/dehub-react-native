
import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import appEpic from './app_epic';
import loginEpic from '../screens/login/login_epic';
import gistsEpic from '../screens/gists/gists_epic';
import viewGistEpic from '../screens/view_gist/view_gist_epic';
import app from './app_reducer';
import fetches from './fetches_reducer';
import login from '../screens/login/login_reducer';
import gists from '../screens/gists/gists_reducer';
import viewGist from '../screens/view_gist/view_gist_reducer';
import api from '../network/api';
import isIOS from '../util/platform';
import { LOGOUT } from './actions';

export const rootEpic = combineEpics(
  appEpic,
  loginEpic,
  gistsEpic,
  viewGistEpic,
);

const reducer = combineReducers({
  app,
  login,
  fetches,
  viewGist,
  gists,
});

export const rootReducer = (state, action) => {
  if (action.type === LOGOUT) {
    return reducer(undefined, action);
  }
  return reducer(state, action);
};

export const epicDependencies = {
  api,
  isIOS,
};
