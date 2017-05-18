
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { rootEpic, rootReducer, epicDependencies } from './root';

const composeEnhancers = composeWithDevTools({
  actionsBlacklist: ['NOP'],
});

const epicMiddleware = createEpicMiddleware(rootEpic, {
  dependencies: epicDependencies,
});

export default (initialState = {}) => (
  createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(epicMiddleware),
    ),
  )
);
