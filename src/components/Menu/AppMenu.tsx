import React from 'react'
import { Menu } from 'antd'
import {
    UserOutlined,
    // DesktopOutlined,
} from '@ant-design/icons'
import { Link } from "react-router-dom";
import { withRouter } from 'react-router'
import { MenuType, ItemType } from '../../config/routes'

const {SubMenu, Item} = Menu

type menuProps = {

}

class AppMenu extends React.Component<any, any> {

    public onNavigate = (path: string) => {
        this.props.history.push(path);
    };

    constructor(props: any) {
        super(props);
        const routes = props.routes

        const item: ItemType | undefined = routes.find((item: ItemType) => item.path === this.props.location.pathname)

        this.state = {
            defaultSelectedKeys: [],
            defaultOpenKeys: []
        }

        if (item && item.key) {
            console.log(item.key.split('-')[0], item.key)
            this.state.defaultSelectedKeys.push(item.key.split('-')[0], item.key)
            this.state.defaultOpenKeys.push(item.key.split('-')[0], item.key)
        }
    }

    createMenuItem (item: ItemType) {
        return (
          <Item
            key={item.id}
          >
              <Link to={item.path}>{ item.title }</Link>
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
        const menus = this.props.menus

        return (
          <Menu
            theme="light"
            defaultSelectedKeys={defaultSelectedKeys}
            defaultOpenKeys={defaultOpenKeys}
            mode="inline"
          >
              {
                  menus.map((submenu:MenuType) => {
                      if (submenu.type === 'item') {
                          return this.createMenuItem(submenu as ItemType)
                      } else {
                          return (
                            <SubMenu
                              key={submenu.id}
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
