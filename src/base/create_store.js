
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic, rootReducer, epicDependencies } from './root';

const epicMiddleware = createEpicMiddleware(rootEpic, {
  dependencies: epicDependencies,
});

export default (initialState = {}) => (
  createStore(
    rootReducer,
    initialState,
    applyMiddleware(epicMiddleware),
  )
);
