import { action, computed, observable } from 'mobx';

class TestAutorun {
  @observable public age = 19;
  @observable public name = '李佳佳';
  @observable public isShow = false;

  @computed
  public get ageContent() {
    return `${testAutorun.name}年龄：${testAutorun.age}`;
  }

  public changeAge(age: number) {
    this.age = age;
  }

  @action // 批量操作
  public changeAll(age: number, name: string) {
    this.age = age;
    this.name = name;
  }

  @action.bound
  public testBound() {
    this.age = 88;
    this.name = 'bound';
  }
}

const testAutorun = new TestAutorun();
export default testAutorun;