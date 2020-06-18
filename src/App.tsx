import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Context from './pages/Context/Context';
import Welcome from './pages/Welcome/Welcome';
import { Layout } from 'antd';
import AppMenu from './components/Menu/AppMenu';
import AppHeader from './components/Header/AppHeader';
import DemoRefs from './pages/DemoRefs/DemoRefs';
import DemoFragments from './pages/DemoFragments/DemoFragments';
import DemoPortals from './pages/DemoPortals/DemoPortals';
import DemoHook from './pages/DemoHook/DemoHook';
import DemoRedux from './pages/DemoRedux/DemoRedux';
import DemoCounter from './pages/DemoRedux/DemoCounter';
import DemoMobx from './pages/DemoMobx/DemoMobx';
import Computed from './pages/DemoMobx/Computed';
import Autorun from './pages/DemoMobx/Autorun';
import { Provider } from 'mobx-react';
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
                <Layout className="main-layout">
                  <Provider {...stores}>
                    <Route path="/context" component={Context}/>
                    <Route path="/welcome" component={Welcome}/>
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
              </Layout>
            </Layout>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
