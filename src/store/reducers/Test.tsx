import { ADD_NAME } from '../action-types';

const initialState = {
  name: 'Peter'
};
export default function (state = initialState, action: any) {
  switch (action.type) {
    case ADD_NAME:
      return {...state, name: action.data};
    default:
      return state;
  }
}


