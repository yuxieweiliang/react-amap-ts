import React, { Suspense } from 'react';
import { Provider } from 'mobx-react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { Layout } from 'antd';
import { routesConfig, ItemType } from './config/routes'
import './App.css';
import 'antd/dist/antd.css';
import Login from './pages/Login/Login'
import actions from './store/actions/Common'

import AppHeader from './components/Header/AppHeader';
import AppMenu from './components/Menu/AppMenu';

import stores from './mobx-stores';

const { Sider } = Layout;

type IRoute = {
  path: string,
  exact?: boolean,
  name: string,
  icon?: string,
  component: any,
  subRoutes?: Array<IRoute>
}


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

  render() {
    const { routes } = this.props
    const cacheRoutePaths = (routes as ItemType[]).map((item) => item.path)

    return (
      <Provider {...stores}>
        <BrowserRouter>
          <Route
            key="login"
            path="/login"
            component={Login}
          />
          <Route
            key="index"
            path="/"
            render={() => {

              console.log('xxxxxxxxxxxxxxxx')
              console.log(!!this.props.isLogin, routes)
              if (!this.props.isLogin && window.location.pathname !== '/login') {
                return <Redirect to={'/login'}/>
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
                          routes && !!routes.length && routesConfig.map((item: ItemType) => {
                            if (item.path && item.component) {
                              return (
                                <Route
                                  key={item.path}
                                  path={item.path}
                                  component={({ location }: any) => {
                                    const Comp = item.component
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
                      </Layout>
                    </Suspense>
                  </Layout>
                </Layout>
              </div>)

            }}
          />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default connect(state => state)(App);
