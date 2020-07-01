import { SET_USER, SET_ROLE } from '../action-types';

export default {
  setUser(data: any) {
    return { type: SET_USER, payload: data };
  },
  setRole(data: any) {
    return { type: SET_ROLE, payload: data };
  }
};
