// action 方法封装

import {CHANGE_STR, CHANGE_FULLNAME} from './actionType'
export const getChangeStr = (item) => ({
  type: CHANGE_STR, // 提交说明
  data: item
})
export const getChangeName = () => ({
  type: CHANGE_FULLNAME // 提交说明
})