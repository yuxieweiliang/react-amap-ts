import React from 'react';
import { Menu } from 'antd';
import {
    UserOutlined,
    DesktopOutlined,
} from '@ant-design/icons';
import { withRouter } from 'react-router';
import { menus, routes, isMenu, MenuType, ItemType } from '../../config/routes'

const {SubMenu, Item} = Menu;

class AppMenu extends React.Component<any, any> {

    public onNavigate = (path: string) => {
        this.props.history.push(path);
    };
    constructor(props: any) {
        super(props);
        const item: ItemType | undefined = routes.find(item => item.path === this.props.location.pathname)

        this.state = {
            defaultSelectedKeys: [],
            defaultOpenKeys: []
        }

        if (item && item.key) {
            console.log(item.key.split('-')[0], item.key)
            this.state.defaultSelectedKeys.push(item.key.split('-')[0], item.key)
            this.state.defaultOpenKeys.push(item.key.split('-')[0], item.key)
        }
        console.log(this.state)
    }

    createMenuItem (item: ItemType) {
        return (
          <Item
            key={item.key}
            onClick={() => this.onNavigate(item.path)}
          >
              { item.title }
          </Item>
        )
    }

    createSubMenu (submenu: MenuType) {
        if (submenu.children) {
            return submenu.children.map(item => {
                return this.createMenuItem(item)
            })
        } else return null
    }

    render() {
        const { defaultSelectedKeys, defaultOpenKeys } = this.state
        return (
          <Menu
            theme="light"
            defaultSelectedKeys={defaultSelectedKeys}
            defaultOpenKeys={defaultOpenKeys}
            mode="inline"
          >
              {
                  menus.map(submenu => {
                      if (submenu.type === 'item') {
                          return this.createMenuItem(submenu as ItemType)
                      } else {
                          return (
                            <SubMenu
                              key={submenu.key}
                              title={<span><UserOutlined/><span>{ submenu.title }</span></span>}
                            >
                                { this.createSubMenu(submenu) }
                            </SubMenu>
                          )
                      }
                  })
              }
          </Menu>
        );
    }
}

export default withRouter(AppMenu);
