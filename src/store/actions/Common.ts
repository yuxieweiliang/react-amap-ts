import { SET_USER, SET_ROLE, SET_MENU, SET_LOGIN } from '../action-types';

export default {
  initial() {
    const login = window.localStorage.getItem(SET_LOGIN)
    return this.setLogin(!!login)
  },
  setLogin(data: boolean) {
    window.localStorage.setItem(SET_LOGIN, String(data))
    return { type: SET_LOGIN, payload: data };
  },
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
