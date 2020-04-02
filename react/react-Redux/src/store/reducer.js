let dataState = {
  str: '==这是仓库中的数据==',
  fullName: '王大树'
}

export default (state = dataState, action) => {
  // console.log('action', action)
  let newState = state
  switch (action.type) {
    case 'change_str':
      newState.str = 'newState新数据';
      return newState;  // 返回新状态，触发变化监听器
      // break;
    case 'change_fullname':
      newState.fullName = '李晓明';
      return newState;
      
    default:
      return state;;
  }
}