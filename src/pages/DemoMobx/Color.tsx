import React from 'react';
import { inject, observer } from 'mobx-react';
import colors from '../../mobx-stores/colors';
import { Select } from 'antd';

const {Option} = Select;

interface ColorProps {
  colors: any;
}

@inject('colors')
@observer
class Color extends React.Component<ColorProps> {

  public onChangeColor = (event: string) => {
    this.props.colors.bgColor = event;
  };

  render() {
    const {bgColor, fontColor} = this.props.colors;
    return (
        <div>
          <Select style={{width:'200px'}} onChange={this.onChangeColor} placeholder="请选择背景色">
            <Option value="red">红</Option>
            <Option value="green">绿</Option>
            <Option value="orange">黄</Option>
          </Select>
          <p style={{background: bgColor}}>bgColor：{bgColor}</p>
          <p style={{color: fontColor}}>fontColor：{fontColor}</p>
        </div>
    );
  }
}

export default Color;