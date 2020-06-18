import React from 'react';
import { Button, Input } from 'antd';
import { DemoRefsA } from './DemoRefsA';
import DemoRefsB from './DemoRefsB';

// 引用传递。
class DemoRefs extends React.Component<any, any> {

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
    return (
        <div>
          <Input ref={this.textInput} placeholder="这是父组件"/>
          <Button type="primary" onClick={this.onFocusClick}>点击获取焦点</Button>
          <Button onClick={this.onFocusAClick}>点击获取子组件A的焦点</Button>
          <DemoRefsA ref={this.textInputA}/>
          {/* todo 在高阶组件中转发refs */}
          <DemoRefsB/>
        </div>
    );
  }
}

export default DemoRefs;
