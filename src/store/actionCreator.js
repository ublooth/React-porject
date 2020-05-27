import {SET_GEOHASH, SET_LATLON} from './actionType'

export const setGeohash = (data) => ({
  type: SET_GEOHASH, // 提交说明
  data: data
})
export const setLatlon = (data) => ({
  type: SET_LATLON, // 提交说明
  data: data
})