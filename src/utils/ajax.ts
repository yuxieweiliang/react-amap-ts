import {isItem, isMenu} from "../config/routes";

class Ajax {
  public requestLogin(username: string, password: string): Promise<object> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({username, password});
      }, 1000);
    });
  }

  public requestUser():Promise<boolean> {
    return new Promise(resolve => {
      setTimeout(() => {
        const currentTime = new Date().getTime();
        const isLogin = currentTime / 2 === Math.round(currentTime / 2);
        resolve(isLogin);
      }, 1000);
    });
  }

  public requestLogout():Promise<boolean> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  }

  public requestMenu():Promise<any> {
    return fetch('http://localhost:3000/role/menu').then(res => res.json()).then(res => {
      const { role, routes, ...user } = res.result
      const menus: {[propName: string]: any} = {}

      if (routes && routes.length > 0) {
        for (const item of routes) {

          if ((isMenu(item) || isItem(item)) && !item.parent && item.id) {
            menus[item.id] = Object.assign(menus[item.id] || {children: []}, item)
          } else {
            if (!menus[item.parent]) {
              menus[item.parent] = {
                children: []
              }
            }
            menus[item.parent].children.push(item)
          }
        }
      }

      if (res.code === 200) {
        return {
          user,
          role,
          routes,
          menus,
        }
      } else {
        return false
      }
    })

  }
}

const ajax = new Ajax();
export default ajax;
