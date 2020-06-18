import { combineReducers } from 'redux';
import Test from './Test';
import Counter from './Counter';

let reducer = combineReducers({
  Test,
  Counter,
});

export default reducer;