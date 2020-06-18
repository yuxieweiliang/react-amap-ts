import { action, flow, observable, runInAction } from 'mobx';
import { timer } from 'rxjs/index';
import { func } from 'prop-types';

export enum LoadingStatus {
  none,
  loading,
  success,
  error
}

class Actions {
  @observable loadingStatus = LoadingStatus.none;
  @observable laterLoadingStatus = LoadingStatus.none;
  @observable flowLoadingStatus = LoadingStatus.none;

  /* 1 */
  @action
  public requestInfo() {
    this.loadingStatus = LoadingStatus.loading;
    timer(1000).subscribe(() => {
      // 动作只会应用于当前栈
      runInAction(() => {
        this.loadingStatus = LoadingStatus.success;
      });
    });
  }

  /* 2 */
  @action
  public async requestTimer() {
    this.laterLoadingStatus = LoadingStatus.loading;
    await this.later();
    runInAction(() => {
      this.laterLoadingStatus = LoadingStatus.success;
    });
  }

  public later() {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log('4s啦！');
        resolve();
      }, 4000);
    });
  }

  /* 3 */
  public requestFlow = flow(function* () {
    // yield this.later();
    // console.log('3s啦！');
  });
}

const actions = new Actions();
export default actions;