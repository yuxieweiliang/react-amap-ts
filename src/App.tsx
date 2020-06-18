import React, { lazy, Suspense } from 'react';
import { Provider } from 'mobx-react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Layout } from 'antd';
import './App.css';
import 'antd/dist/antd.css';

import AppHeader from './components/Header/AppHeader';
import AppMenu from './components/Menu/AppMenu';

import DemoRefs from './pages/DemoRefs/DemoRefs';
import DemoFragments from './pages/DemoFragments/DemoFragments';
import DemoPortals from './pages/DemoPortals/DemoPortals';
import DemoHook from './pages/DemoHook/DemoHook';
import DemoRedux from './pages/DemoRedux/DemoRedux';
import DemoCounter from './pages/DemoRedux/DemoCounter';
import DemoMobx from './pages/DemoMobx/DemoMobx';
import Computed from './pages/DemoMobx/Computed';
import Autorun from './pages/DemoMobx/Autorun';
import stores from './mobx-stores';
import Color from './pages/DemoMobx/Color';
import Action from './pages/DemoMobx/Action';

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
                      <Route path="/context" component={lazy(() => import('./pages/Context/Context'))}/>
                      <Route path="/welcome" component={lazy(() => import('./pages/Welcome/Welcome'))}/>
                      <Route path="/demo-refs" component={DemoRefs}/>
                      <Route path="/demo-fragments" component={DemoFragments}/>
                      <Route path="/demo-portals" component={DemoPortals}/>
                      <Route path="/demo-hook" component={DemoHook}/>
                      <Route exact path="/demo-redux" component={DemoRedux}/>
                      <Route path="/demo-counter" component={DemoCounter}/>
                      <Route path="/demo-mobx" component={DemoMobx}/>
                      <Route path="/computed" component={Computed}/>
                      <Route path="/autorun" component={Autorun}/>
                      <Route path="/color" component={Color}/>
                      <Route path="/action" component={Action}/>
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
