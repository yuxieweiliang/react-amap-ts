import React from 'react';
import { Button } from 'antd';
import good from './mobx-computed/good';
import goodLine from './mobx-computed/goodLine';
import decorateGood from './mobx-computed/decorateGood';

class Computed extends React.Component {

  public onTestGood = () => {
    good.totalPrice = 9000;
    console.log(good.price);
  };

  public onTestGoodLine = () => {
    goodLine.totalPrice = 9000;
    console.log(goodLine.price);
  };

  public onTestDecorateGood = () => {
    console.log(decorateGood.price);
    decorateGood.totalPrice = 4800;
    console.log(decorateGood.price);
  };

  render() {
    return (
        <div>
          <Button>测试</Button>
          <div>
            <h3>第1种：@装饰器</h3>
            <p><Button onClick={this.onTestGood}>根据总金额计算单价</Button></p>
          </div>
          <div>
            <h3>第2种：observable.object</h3>
            <Button onClick={this.onTestGoodLine}>根据总金额计算单价</Button>
          </div>
          <div>
            <h3>第3种:decorate</h3>
            <Button onClick={this.onTestDecorateGood}>根据总金额计算单价</Button>
          </div>
        </div>
    );
  }
}

export default Computed;