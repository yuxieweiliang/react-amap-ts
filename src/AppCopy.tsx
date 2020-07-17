import React, { Suspense } from 'react';
import { Provider } from 'mobx-react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { Layout, message } from 'antd';
import { routesConfig, ItemType } from './config/routes'
import './App.less';
import 'antd/dist/antd.css';
import ajax from './utils/ajax'
import Login from './pages/Login/Login'

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
}

class App extends React.Component<any, AppStates> {

  public state: AppStates = {
    isLogin: false,
  };

  public tryingLogin: boolean = true;

  public componentDidMount() {
    /*if (this.tryingLogin) {
      const hide = message.loading('加载中...');
      ajax.requestUser().then(state => {
        hide();
        this.setState({isLogin: state});
      })
    }*/
  }

  render() {
    const { routes } = this.props
    const cacheRoutePaths = (routes as ItemType[]).map((item) => item.path)

    console.log(!this.state.isLogin && window.location.pathname !== '/login')
    return (
      <Provider {...stores}>
        <BrowserRouter>


          <div>
            {
              (!this.state.isLogin && window.location.pathname !== '/login') ? (
                <Login/>
                ) : (
                <Layout style={{height: '100vh'}}>
                  <AppHeader/>
                  <Layout>
                    <Sider width={201} theme="light">
                      <AppMenu routes={routes} menus={this.props.menus}/>
                    </Sider>
                    <Suspense fallback={<div>Loading...</div>}>
                      <Layout className="main-layout">
                          {
                            routesConfig.map((item: ItemType) => {
                              if (item.path && item.component) {
                                return (
                                  <Route
                                    key={item.path}
                                    path={item.path}
                                    component={({ location, history }: any) => {
                                      const Comp = item.component
                                      if (cacheRoutePaths.includes(location.pathname)) {
                                        return <Comp/>
                                      } else {
                                        // history.push('/')
                                        return null
                                      }
                                    }}
                                  />
                                )
                              } else return null
                            })
                          }
                          <Redirect to={'/demo-Welcome'}/>
                      </Layout>
                    </Suspense>
                  </Layout>
                </Layout>
              )
            }
          </div>


        </BrowserRouter>
      </Provider>
    );
  }
}

export default connect(state => state)(App);
