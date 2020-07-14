import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'
import actions from "./store/actions/Common"
import ajax from "./utils/ajax"

/*
type IRoute = {
  path: string,
  exact?: boolean,
  name: string,
  icon?: string,
  component: any,
  subRoutes?: Array<IRoute>
}
*/

type cbType = {  (routes: any, menus: any): void }
function initialApp (cb: cbType) {

  store.dispatch(actions.initial())

  ajax.requestMenu().then(state => {

    if (state) {
      const { role, routes, user, menus } = state

      store.dispatch(actions.setUser(user))
      store.dispatch(actions.setRole(role))

      console.log(menus)

      cb(routes, menus)
    } else {
      cb([], {})
    }
  })
}

type menuType = {[propName: string]: any}
initialApp((routes: any, menus: menuType = {}) => {

  ReactDOM.render(
    <Provider store={store}>
      <App routes={routes} menus={Object.values(menus).filter(item => item.path !== '/index')}/>
    </Provider>,
    document.getElementById('root')
  );

})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
