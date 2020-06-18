import { COUNTER_DECREMENT, COUNTER_INCREMENT } from '../action-types';

const initialState = {
  count: 0
};
export default (state = initialState, action: any) => {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return {...state, count: state.count + 1};
    case COUNTER_DECREMENT:
      return {...state, count: state.count - 1};
    default:
      return state;
  }
}