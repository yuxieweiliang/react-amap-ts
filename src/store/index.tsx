import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import { createLogger } from 'redux-logger'

//生成store对象
const store = createStore(
  reducer,
  applyMiddleware(createLogger(), thunk)
);//内部会第一次调用reducer函数，得到初始state

export default store;
