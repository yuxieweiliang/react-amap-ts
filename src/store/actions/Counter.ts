import { COUNTER_DECREMENT, COUNTER_INCREMENT } from '../action-types';

export default {
  increase() {
    return {type: COUNTER_INCREMENT};
  },
  decrease() {
    return {type: COUNTER_DECREMENT};
  }
};