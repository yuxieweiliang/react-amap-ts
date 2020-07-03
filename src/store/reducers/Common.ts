import {SET_ROLE, SET_USER, SET_MENU, SET_LOGIN} from '../action-types';

/**
 * 登录状态
 */
export function isLogin(state: boolean = false, action: any) {
  switch (action.type) {
    case SET_LOGIN:
      return !!action.payload
    default:
      return state;
  }
}

const initialUser = {
  username: null,
  gender: null,
  phone: null,
};
/**
 * 用户数据
 */
export function user(state: any = initialUser, action: any) {
  switch (action.type) {
    case SET_USER:
      return Object.assign(state, action.payload);
    default:
      return state;
  }
}

const initialRole = {
  auth: null,
  describe: null,
  permissions: [],
};
/**
 * 权限数据
 */
export function role(state: any = initialRole, action: any) {
  switch (action.type) {
    case SET_ROLE:
      return Object.assign(state, action.payload);
    default:
      return state;
  }
}

const initialAuth = {
  auth: null,
  describe: null,
  permissions: [],
};
/**
 * 权限数据
 */
export function auto(state: any = initialAuth, action: any) {
  switch (action.type) {
    case SET_MENU:
      return Object.assign(state, action.payload);
    default:
      return state;
  }
}
