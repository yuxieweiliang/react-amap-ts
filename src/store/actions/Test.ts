import { ADD_NAME } from '../action-types';

export default {
  addName(name: string) {
    return {type: ADD_NAME, data: name};
  }
};