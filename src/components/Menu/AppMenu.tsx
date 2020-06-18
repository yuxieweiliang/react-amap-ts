import React from 'react';
import { Menu } from 'antd';
import {
  UserOutlined,
  DesktopOutlined,
} from '@ant-design/icons';
import { withRouter } from 'react-router';

const {SubMenu, Item} = Menu;

class AppMenu extends React.Component<any, any> {

  public onNavigate = (path: string) => {
    this.props.history.push(path);
  };

  render() {
    return (
        <div>
          <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
            <SubMenu key="sub1" title={<span>
                  <UserOutlined/><span>使用</span>
                </span>}>
              <Item key="3" onClick={() => this.onNavigate('context')}>context</Item>
              <Item key="4" onClick={() => this.onNavigate('demo-refs')}>refs</Item>
              <Item key="5" onClick={() => this.onNavigate('demo-fragments')}>Fragments</Item>
            </SubMenu>
            <Item key="1" onClick={() => this.onNavigate('demo-portals')}>
              <DesktopOutlined/>
              <span>Portals</span>
            </Item>
            <Item key="2" onClick={() => this.onNavigate('demo-hook')}>
              <DesktopOutlined/>
              <span>Hook</span>
            </Item>
            <SubMenu key="sub2" title={<span>
                  <UserOutlined/><span>Redux练习</span>
                </span>}>
              <Item key="6" onClick={() => this.onNavigate('demo-redux')}>redux</Item>
              <Item key="7" onClick={() => this.onNavigate('demo-counter')}>counter</Item>
            </SubMenu>
            <SubMenu key="sub3" title={<span>
                  <UserOutlined/><span>Mobx练习</span>
                </span>}>
              <Item key="16" onClick={() => this.onNavigate('demo-mobx')}>redux</Item>
              <Item key="17" onClick={() => this.onNavigate('computed')}>Computed</Item>
              <Item key="18" onClick={() => this.onNavigate('autorun')}>Autorun</Item>
              <Item key="19" onClick={() => this.onNavigate('color')}>Color</Item>
              <Item key="20" onClick={() => this.onNavigate('action')}>异步Action</Item>
            </SubMenu>
          </Menu>
        </div>
    );
  }
}

export default withRouter(AppMenu);