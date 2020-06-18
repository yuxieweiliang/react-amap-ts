import React from 'react';
import DemoPortalsChild from './DemoPortalsChild';
import { Button } from 'antd';

class DemoPortals extends React.Component<any, any> {

  public state = {
    showModal: false
  };

  public onShow = () => {
    this.setState({showModal: true});
  };

  public onHide = () => {
    this.setState({showModal: false});
  };

  render() {
    const {showModal} = this.state;
    const modal = showModal ? <DemoPortalsChild>
      <div className="modal">
        <div>test</div>
        <Button onClick={this.onHide}>关闭</Button>
      </div>
    </DemoPortalsChild> : null;
    return (
        <>
          <h3>DemoPortals</h3>
          <Button type="primary" style={{width: '100px'}}
                  onClick={this.onShow}>显示</Button>
          {modal}
        </>
    );
  }
}

export default DemoPortals;