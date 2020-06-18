import React from 'react';
import { inject, observer } from 'mobx-react';
import { Button } from 'antd';
import { LoadingStatus } from '../../mobx-stores/actions';


interface ActionProps {
  loadingStatus: LoadingStatus;
  laterLoadingStatue: LoadingStatus;
  flowLoadingStatue: LoadingStatus;
  requestInfo: any;
  requestTimer: any;
  requestFlow: any;
}

@inject((stores: any) => ({
  loadingStatus: stores.actions.loadingStatus,
  laterLoadingStatue: stores.actions.laterLoadingStatus,
  requestInfo: () => {
    stores.actions.requestInfo();
  },
  requestTimer: () => {
    stores.actions.requestTimer();
  },
  requestFlow: () => {
    stores.actions.requestFlow();
  }
}))
@observer
class Action extends React.Component<ActionProps> {


  render() {
    return (
        <div>
          <h3>异步action</h3>
          <h5>请求状态：{this.props.loadingStatus}</h5>
          <Button onClick={this.props.requestInfo}>开始异步请求...</Button>
          <h5>Later请求状态：{this.props.laterLoadingStatue}</h5>
          <Button onClick={this.props.requestTimer}>开始Later异步请求...</Button>
        </div>
    );
  }
}

export default Action;
