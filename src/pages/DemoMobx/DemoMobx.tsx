import React from 'react';
import { observable, autorun, computed, decorate } from 'mobx';
import { Button } from 'antd';

class DemoMobx extends React.Component {

  @observable isShow = true;

  public user = observable({
    name: '张三',
    age: 12,
    income: 1000,
    get content() {
      return this.name + '的账户金额:' + this.income;
    }
  });

  public todos = observable([
    {title: 'Spoil tea', completed: true},
    {title: 'Make coffee', completed: false}
  ]);

  public boxValue = observable.box('sunjiaqi');

  public price = 3;

  // 永远在 getter 之后 定义 setter，一些 TypeScript 版本会知道声明了两个具有相同名称的属性
  get txtContent() {
    return this.isShow.toString() + this.price;
  }

  componentDidMount() {
    this.boxValue.observe(change => {
      console.log(change.oldValue + '->' + change.newValue);
    });
  }

  // 观察

  public autorun1 = autorun(() => {
    console.log(this.user.content);
  });

  public autorun2 = autorun(() => {
    console.log('isShow:' + this.price);
  });

  public autorun3 = autorun(() => {
    console.log('Remaining:', this.todos
        .filter(todo => !todo.completed)
        .map(todo => todo.title)
        .join(', ')
    );
  });

  public onViewIndex = () => {
    this.user.name = '李四';
    this.todos[0].completed = false;
    this.boxValue.set('sunjiajia' + new Date().getTime());
    this.price = 4;
  };

  public onChangeIndex = () => {
    this.user.income = 500;
    this.isShow = false;
    this.todos[2] = {title: 'Take a nap', completed: false};
    this.price = 8;
  };

  render() {
    return (
        <div>
          <h3>{this.txtContent}</h3>
          <Button onClick={this.onChangeIndex}>改变</Button>
          <Button onClick={this.onViewIndex}>查看</Button>
          <p>DemoMobx</p>
        </div>
    );
  }
}

decorate(DemoMobx, {
  // price: observable,
  txtContent: computed
});

export default DemoMobx;