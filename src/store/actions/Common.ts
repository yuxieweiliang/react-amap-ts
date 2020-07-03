import { SET_USER, SET_ROLE, SET_MENU } from '../action-types';

export default {
  setUser(data: any) {
    return { type: SET_USER, payload: data };
  },
  setRole(data: any) {
    return { type: SET_ROLE, payload: data };
  },
  setMenu(data: any) {
    return { type: SET_MENU, payload: data };
  },
};
