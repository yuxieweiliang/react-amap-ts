import React from 'react';
import { Button, Input } from 'antd';
import { logProps } from './LogProps'

// 只有FunctionComponent才用得到forwardRef，ClassComponent不需要
export const DemoRefsA = React.forwardRef((props, ref:any) => (
  <div>
    <Input ref={ref} placeholder="这是子组件A"/>
  </div>
));

class DemoRefsB extends React.Component {
  render() {
    return 'DemoRefsB';
  }
}

// 引用传递。
class DemoRefs extends React.Component<any, any> {
  state = {
    data: undefined
  }

  public textInput: React.RefObject<Input> = React.createRef();

  public textInputA: React.RefObject<Input> = React.createRef();

  public onFocusClick = () => {
    if (this.textInput.current) {
      this.textInput.current.focus();
    }
  };

  public onFocusAClick = () => {
    if (this.textInputA.current) {
      this.textInputA.current.focus();
    }
  };

  componentDidMount() {
    this.onFocusClick();
  }

  render() {
    const DemoRefsBWidthLog = logProps(DemoRefsB)
    return (
      <div>
        <Input ref={this.textInput} placeholder="这是父组件"/>
        <Button type="primary" onClick={this.onFocusClick}>点击获取焦点</Button>
        <Button onClick={this.onFocusAClick}>点击获取子组件A的焦点</Button>
        <DemoRefsA ref={this.textInputA}/>
        {/* todo 在高阶组件中转发refs */}
        <DemoRefsBWidthLog options={this.state.data}/>

      </div>
    );
  }
}

export default DemoRefs;
