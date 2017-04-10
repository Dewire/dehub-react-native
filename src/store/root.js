
import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import app from './app_reducer';
import loginEpic from '../screens/login/login_epic';
import login from '../screens/login/login_reducer';

export const rootEpic = combineEpics(
  loginEpic,
);

export const rootReducer = combineReducers({
  app,
  login,
});
