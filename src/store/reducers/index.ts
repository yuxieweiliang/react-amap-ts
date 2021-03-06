import { combineReducers } from 'redux';
import Test from './Test';
import Counter from './Counter';
import * as Common from './Common';

let reducer = combineReducers({
  ...Common,
  Test,
  Counter,
});

export default reducer;
