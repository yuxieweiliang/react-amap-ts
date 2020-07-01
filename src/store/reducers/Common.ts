import { SET_ROLE, SET_USER } from '../action-types';

const initialUser = {
  username: null,
  gender: null,
  phone: null,
};
/**
 * 用户数据
 */
function user(state: any = initialUser, action: any) {
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
function role(state: any = initialRole, action: any) {
  switch (action.type) {
    case SET_ROLE:
      return Object.assign(state, action.payload);
    default:
      return state;
  }
}

export default {
  user,
  role
}
