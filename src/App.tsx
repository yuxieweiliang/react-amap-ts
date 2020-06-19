import React, { Suspense } from 'react';
import { Provider } from 'mobx-react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Layout } from 'antd';
import './App.css';
import 'antd/dist/antd.css';
import { routes } from './config/routes'

import AppHeader from './components/Header/AppHeader';
import AppMenu from './components/Menu/AppMenu';

/*import DemoRefs from './pages/DemoRefs/DemoRefs';
import DemoFragments from './pages/DemoFragments/DemoFragments';
import DemoPortals from './pages/DemoPortals/DemoPortals';
import DemoHook from './pages/DemoHook/DemoHook';
import DemoRedux from './pages/DemoRedux/DemoRedux';
import DemoCounter from './pages/DemoRedux/DemoCounter';
import DemoMobx from './pages/DemoMobx/DemoMobx';
import Computed from './pages/DemoMobx/Computed';
import Autorun from './pages/DemoMobx/Autorun';
import Color from './pages/DemoMobx/Color';
import Action from './pages/DemoMobx/Action';*/
import stores from './mobx-stores';

const {Sider} = Layout;

type IRoute = {
  path: string,
  exact?: boolean,
  name: string,
  icon?: string,
  comp?: any,
  subRoutes?: Array<IRoute>
}

interface AppProps {
}

interface AppStates {
  // isLogin: boolean;
}

class App extends React.Component<any, AppStates> {

  public state: AppStates = {
    isLogin: false,
  };

  public tryingLogin: boolean = true;

  public componentDidMount() {
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
    console.log(Object.values(routes))
    return (
        <BrowserRouter>
          <div>
            <Layout style={{height: '100vh'}}>
              <AppHeader/>
              <Layout>
                <Sider width={201} theme="light">
                  <AppMenu/>
                </Sider>
                <Suspense fallback={<div>Loading...</div>}>
                  <Layout className="main-layout">
                    <Provider {...stores}>
                      {
                        routes.map(item => {
                          if (item.path && item.component) {
                            return (
                                <Route
                                    key={item.path}
                                    path={item.path}
                                    component={item.component}
                                />
                            )
                          }
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

export default App;
