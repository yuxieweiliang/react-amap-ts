import React from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import actions from '../../store/actions/Counter';

interface CounterProps {
  increase: any;
  decrease: any;
  count: number;
}

class DemoCounter extends React.Component<CounterProps> {
  public add = () => {
    this.props.increase();
  };
  public reduce = () => {
    this.props.decrease();
  };

  render() {
    return (
        <>
          <h4>数值：{this.props.count}</h4>
          <Button onClick={this.add}>加1</Button>
          <Button onClick={this.reduce}>减1</Button>
        </>
    );
  }
}


export default connect((state: any) => {
  return state.Counter;
}, actions)(DemoCounter);
