class Ajax {
  public requestLogin(username: string, password: string): Promise<string> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(username);
      }, 3000);
    });
  }

  public requestUser():Promise<boolean> {
    return new Promise(resolve => {
      setTimeout(() => {
        const currentTime = new Date().getTime();
        const isLogin = currentTime / 2 === Math.round(currentTime / 2);
        resolve(isLogin);
      }, 3000);
    });
  }

  public requestLogout():Promise<boolean> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 3000);
    });
  }
}

const ajax = new Ajax();
export default ajax;