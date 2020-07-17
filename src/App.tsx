import React, { Suspense } from 'react'
import { Provider } from 'mobx-react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import { ConfigProvider, Layout } from 'antd'
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/es/locale/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'
import { routesConfig, ItemType } from './config/routes'
import Login from './pages/Login/Login'

import './App.less'


import AppHeader from './components/Header/AppHeader'
import AppMenu from './components/Menu/AppMenu'

import stores from './mobx-stores'

const { Sider } = Layout

moment.locale('zh-cn')
/*interface AppProps {
  history?: {path: string};
  routes: object[];
  menus: object[];
}*/

interface AppStates {
  /*isLogin: boolean;
  menus: object[];*/
  isLogin: Boolean;
  display: string | undefined;
}

class App extends React.Component<any, AppStates> {

  public state: AppStates = {
    isLogin: false,
    display: window.location.pathname === '/login' ? 'none': undefined,
  };

  public componentDidMount() {}

  renderRoutes (cacheRoutePaths: string[]) {
    return routesConfig.map((item: ItemType) => {
      const Comp = item.component

      if (item.path && Comp) {
        return (
            <Route
                key={item.path}
                path={item.path}
                component={({ location }: any) => {
                  console.log(cacheRoutePaths)

                  if (cacheRoutePaths.includes(location.pathname)) {
                    return <Comp/>
                  } else {
                    return <Redirect to={'/demo-Welcome'}/>
                  }

                }}
            />
        )
      } else return null
    })
  }

  render() {
    const { routes } = this.props
    const cacheRoutePaths: string[] = (routes as ItemType[]).map((item) => item.path)

    return (
        <ConfigProvider locale={zhCN}>
          <Provider {...stores}>
            <BrowserRouter>
              <Route
                  key="login"
                  path="/login"
                  component={Login}
              />
              {/*  路由配置  */}
              <Route
                  key="/"
                  path="/"
                  render={(router) => {

                    if (!this.props.isLogin && window.location.pathname !== '/login') {
                      return <Redirect to={'/login'}/>
                    }
                    else if (window.location.pathname === '/') {
                      return <Redirect to={'/index'}/>
                    }

                    return (<div>
                      <Layout style={{height: '100vh', display: this.state.display }}>
                        <AppHeader/>
                        <Layout>
                          <Sider width={201} theme="light">
                            <AppMenu routes={routes} menus={this.props.menus}/>
                          </Sider>
                          <Suspense fallback={<div>Loading...</div>}>
                            <Layout className="main-layout">
                              {
                                routes && !!routes.length && this.renderRoutes(cacheRoutePaths)
                              }
                            </Layout>
                          </Suspense>
                        </Layout>
                      </Layout>
                    </div>)

                  }}
              />
            </BrowserRouter>
          </Provider>
        </ConfigProvider>
    );
  }
}

export default connect(state => state)(App);
