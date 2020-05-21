// 仓库
// store: store对象是保存公共数据的地方，一个应用只能创建一个store。

import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer);

export default store;