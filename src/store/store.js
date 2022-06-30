import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';

import InitPageReducer from './InitPage/InitPage.reducer';
import ValueCalculatorReducer from './ValueCalculator/valueCalculator.reducer';

const rootReducer = combineReducers({
  initPage: InitPageReducer,
  valueCalculator: ValueCalculatorReducer
});

const store = createStore(rootReducer, applyMiddleware(reduxPromise));

export default store;