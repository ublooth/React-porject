import { CHANGE_STR, CHANGE_FULLNAME } from './actionType'

let dataState = {
  str: '==这是仓库中的数据==',
  fullName: '王大树'
}

export default (state = dataState, action) => {
  let newState = state
  switch (action.type) {
    case CHANGE_STR:
      newState.str = 'newState新数据';
      return newState;  // 返回新状态，触发变化监听器
      // break;
    case CHANGE_FULLNAME:
      newState.fullName = '李晓明';
      return newState;
      
    default:
      return state;;
  }
}