import React from 'react';
import { Layout, message, Modal } from 'antd';
import { LogoutOutlined, ExclamationCircleOutlined, } from '@ant-design/icons';
import ajax from '../../utils/ajax';
import './AppHeader.css';

const {Header} = Layout;

class AppHeader extends React.Component <any, any> {

  public onLogoutClick = () => {
    Modal.confirm({
      title: '退出',
      icon: <ExclamationCircleOutlined/>,
      content: '是否确认退出？',
      okText: '确认',
      cancelText: '取消',
      onOk: () => {
        const hide = message.loading('正在退出...');
        ajax.requestLogout().then(() => {
          hide();
          this.props.history.push('/login');
        });
      }
    });
  };

  render() {
    return (
        <div>
          <Header>
            <div className="logout" onClick={this.onLogoutClick}>
              <LogoutOutlined/>
              登出
            </div>
          </Header>
        </div>
    );
  }
}

export default AppHeader;
