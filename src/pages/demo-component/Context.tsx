import React from 'react';
import ContextC from './ContextC';
import ContextFC from './ContextFC';
import { Select, Row, Col } from 'antd';

const {Option} = Select;

// 传递数据方法，不必层层传递。
export const ThemeContext = React.createContext('light');

class Context extends React.Component {

  public state = {
    selectColor: 'red'
  };

  public onColorChange = (event: string) => {
    this.setState({selectColor: event});
  };

  render() {
    const {selectColor} = this.state;
    return (
        <div>
            <p>Context</p>
            <span>选择颜色：</span>
            <Select value={selectColor} style={{width: 120}} onChange={this.onColorChange}>
                <Option value="red">红</Option>
                <Option value="green">绿</Option>
                <Option value="orange">黄</Option>
            </Select>
            {/* 生产者 */}
            <ThemeContext.Provider value={selectColor}>
                <Row>
                    <Col>
                        <ContextC/>
                    </Col>
                    <Col>
                        <ContextFC/>
                    </Col>
                </Row>
            </ThemeContext.Provider>
        </div>
    );
  }
}

export default Context;
