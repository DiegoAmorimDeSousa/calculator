import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';

import InitPageReducer from './InitPage/InitPage.reducer';

const rootReducer = combineReducers({
  initPage: InitPageReducer
});

const store = createStore(rootReducer, applyMiddleware(reduxPromise));

export default store;