import React from 'react';
import { autorun, reaction, when } from 'mobx';
import { Button, Input } from 'antd';
import { observer } from 'mobx-react';
import testAutorun from '../../mobx-stores/testAutorun';
import Timer from './Timer';
import timerData from '../../mobx-stores/timer';
import Timer1 from './Timer1';
import Timer2 from './Timer2';

@observer
class Autorun extends React.Component<any, any> {

  public textInput: React.RefObject<Input> = React.createRef();

  public state = {
    ageContent: ''
  };

  async componentDidMount() {
    /* @computed 用于响应式的产生一个可以被其他 observer 使用的值；
       autorun 不产生新的值，而是达到一个效果（如：打印日志，发起网络请求等命令式的副作用）；
        @computed中，如果一个计算值不再被观察了，MobX 可以自动地将其垃圾回收，而 autorun 中的值必须要手动清理才行。*/
    // todo 手动清理方法
    // autorun(() => {
    //   this.setState({ageContent: `${testAutorun.name}年龄：${testAutorun.age}`});
    //   console.log(testAutorun.age);
    // }, {delay: 100});

    reaction(() => [testAutorun.age, testAutorun.name], arr => {
      console.log('reaction', arr);
    });

    /* 第一个函数必须根据*可观察数据*来返回一个布尔值，当该布尔值为 true 时，才会去执行第二个函数，并且只会执行一次 */
    when(() => testAutorun.isShow, this.dispose);
    /* 如果没提供 effect 函数，when 会返回一个 Promise 。它与 async / await 可以完美结合 */
    await when(() => testAutorun.age === 18);
    console.log('长大啦！18啦！');
    // 注意await： 刚刚把方法放在这里异步操作没有进行导致代码不执行
  }

  componentWillUnmount() {

  }

  // 可以干一些清理的活
  public dispose = () => {
    console.log('clear');
  };

  public onChangeAge = () => {
    if (this.textInput.current) {
      const age = Number(this.textInput.current.state.value);
      testAutorun.changeAge(age);
    }
    testAutorun.isShow = false;
  };

  public onShow = () => {
    testAutorun.isShow = true;
  };

  public onChangeAll = () => {
    if (this.textInput.current) {
      const age = Number(this.textInput.current.state.value);
      testAutorun.changeAll(age, testAutorun.name);
    }
    this.onTestBound(testAutorun.testBound);
  };

  public onTestBound = (callback: any) => {
    callback();
  };

  render() {
    // const {testAutorun} = this.props;
    return (
        <div>
          <Timer timerData={timerData}/>
          <Timer1/>
          <Timer2 timerData={timerData}/>
          <div>
            <Input ref={this.textInput} placeholder="请输入李佳佳年龄" style={{width: '180px'}}/>
            <Button onClick={this.onChangeAge}>确定</Button>

            <p>{testAutorun.ageContent}</p>
          </div>
          <br/>
          <Button onClick={this.onShow}>显示</Button><br/>
          <Button onClick={this.onChangeAll}>修改全部</Button><br/>
          <Button onClick={this.onChangeAll}>测试bound</Button><br/>
        </div>
    );
  }
}

export default Autorun;
