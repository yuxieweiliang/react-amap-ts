import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'
import action from './store/actions/Common'
import { isMenu, isItem, ItemType } from './config/routes'

type IRoute = {
  path: string,
  exact?: boolean,
  name: string,
  icon?: string,
  component: any,
  subRoutes?: Array<IRoute>
}

fetch('http://localhost:3000/role/as').then(res => res.json()).then(res => {
  const { role, menu, ...user } = res.result
  const menus: {[propName: string]: any} = {}

  store.dispatch(action.setUser(user))
  store.dispatch(action.setRole(role))

  if (menu && menu.length > 0) {
    for (const item of menu) {

      if ((isMenu(item) || isItem(item)) && !item.parent && item.id) {
        menus[item.id] = Object.assign(menus[item.id] || {children: []}, item)
      } else {
        if (!menus[item.parent]) {
          menus[item.parent] = {
            children: []
          }
        }
        menus[item.parent].children.push(item)
      }
    }
  }

  if (res.code === 200) {
    ReactDOM.render(
      <Provider store={store}>
        <App routes={menu} menus={Object.values(menus)}/>
      </Provider>,
      document.getElementById('root')
    );
  }
})


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
