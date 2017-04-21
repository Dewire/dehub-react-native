
import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import appEpic from './app_epic';
import loginEpic from '../screens/login/login_epic';
import gistsEpic from '../screens/gists/gists_epic';
import app from './app_reducer';
import fetches from './fetches_reducer';
import login from '../screens/login/login_reducer';

export const rootEpic = combineEpics(
  appEpic,
  loginEpic,
  gistsEpic,
);

export const rootReducer = combineReducers({
  app,
  login,
  fetches,
});
