import React from 'react';
import { Button, Input } from 'antd';
import { connect } from 'react-redux';
import actions from '../../store/actions/Test';
import { widthPermission } from './widthPermission';


interface LoginProps {
  name: string;
  addName: any;
}

class DemoRedux extends React.Component<LoginProps> {

  public textInput: React.RefObject<Input> = React.createRef();

  public handlerFunc = () => {
    if (this.textInput.current) {
      const inputValue = this.textInput.current.state.value;
      this.props.addName(inputValue);
    }
  };

  render() {
    const {name} = this.props;
    return (
      <>
        <h3>Redux!</h3>
        <h4>
          npm install --save prop-types <br/>
          npm install --save react-redux <br/>
          npm install --save redux <br/>
        </h4>
        <label>输入框值：{name} </label><br/>
        <div style={{width: '300px'}}>
          <Input ref={this.textInput} placeholder="测试Redux!"/>
          <p></p>
          <Button onClick={this.handlerFunc}>confirm</Button>
        </div>
        <br/>
      </>
    );
  }
}

export default connect((state: any) => {
  return state.Test;
}, actions)(DemoRedux);
