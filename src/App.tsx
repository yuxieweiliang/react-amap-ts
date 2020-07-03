import React, { Suspense } from 'react';
import { Provider } from 'mobx-react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, generatePath } from 'react-router-dom';
import { Layout } from 'antd';
import { routesConfig, ItemType } from './config/routes'
import './App.css';
import 'antd/dist/antd.css';

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


interface AppProps {
  routes: object[];
  menus: object[];
}

interface AppStates {
  /*isLogin: boolean;
  menus: object[];*/
}

class App extends React.Component<AppProps, AppStates> {

  public state: AppStates = {
    isLogin: false,
  };

  public tryingLogin: boolean = true;

  public componentDidMount() {
    console.log(generatePath(window.location.pathname))
    // if (this.tryingLogin) {
    //   const hide = message.loading('加载中...');
    //   ajax.requestUser().then(state => {
    //     hide();
    //     console.log(state);
    //     this.setState({isLogin: state});
    //     if (!state) {
    //       this.props.history.push('/login');
    //       return;
    //     }
    //   });
    // }
  }

  render() {
    const { routes } = this.props
    console.log(this.props)

    return (
        <BrowserRouter
          basename='/'
          getUserConfirmation={(message, callback) => {
            const allowTransition = window.confirm(message);
            callback(allowTransition)
          }}
        >
          <div>
            <Layout style={{height: '100vh'}}>
              <AppHeader/>
              <Layout>
                <Sider width={201} theme="light">
                  <AppMenu routes={routesConfig} menus={this.props.menus}/>
                </Sider>
                <Suspense fallback={<div>Loading...</div>}>
                  <Layout className="main-layout">
                    <Provider {...stores}>
                      {
                        routesConfig.map((item: ItemType) => {
                          if (item.path && item.component) {
                            return (
                                <Route
                                    key={item.path}
                                    path={item.path}
                                    component={({ location, history }: any) => {
                                      const Comp = item.component
                                      console.log(routes.includes(location.pathname))
                                      if (routes.includes(location.pathname)) {
                                        return <Comp/>
                                      } else {
                                        history.push('/')
                                        return null
                                      }
                                    }}
                                />
                            )
                          } else return null
                        })
                      }
                    </Provider>
                  </Layout>
                </Suspense>
              </Layout>
            </Layout>
          </div>
        </BrowserRouter>
    );
  }
}

export default connect(state => state)(App);
