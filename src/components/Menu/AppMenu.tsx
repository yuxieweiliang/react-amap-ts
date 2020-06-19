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

    createMenuItem (submenu: MenuType) {
        if (submenu.children) {
            return submenu.children.map(item => {
                return (
                  <Item
                    key={(item as ItemType).key}
                    onClick={() => this.onNavigate(item.path)}
                  >
                      { item.title }
                  </Item>
                )
            })
        } else return null
    }

    render() {
        const { defaultSelectedKeys, defaultOpenKeys } = this.state
        console.log(menus)
        return (
          <Menu theme="light" defaultSelectedKeys={defaultSelectedKeys} defaultOpenKeys={defaultOpenKeys} mode="inline">
              {
                  menus.map(submenu => {
                      return (
                        <SubMenu
                          key={submenu.key}
                          title={<span><UserOutlined/><span>{ submenu.title }</span></span>}
                        >
                            { this.createMenuItem(submenu) }
                        </SubMenu>
                      )
                  })
              }
          </Menu>
        );
    }
}

export default withRouter(AppMenu);
