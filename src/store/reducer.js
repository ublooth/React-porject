import {CHANGE_STR, CHANGE_CITY} from './actionTypes'

let dataState = {
  str: '这是仓库中的数据！',
  city: '北京！',
}

export default (state = dataState, action) => {
  let newState = state;
  switch (action.type) {
    case CHANGE_STR:
      console.log('action', action);
      newState.str = 123123;
      return newState;
      break;

    case CHANGE_CITY:
      // console.log(newState);
      newState.city = '上海';
      return newState;
      break;

    default:
      return state;
  }
}