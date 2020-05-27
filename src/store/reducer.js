import {SET_GEOHASH, SET_LATLON} from './actionType'

let dataStore = {
  geohash: '',
	latitude: '', // 当前位置纬度
	longitude: '', // 当前位置经度
}

export default (state = dataStore, action) => {
  let newState = state
  switch (action.type) {
    case SET_GEOHASH:
      newState.geohash = action.data;
      // console.log(newState, '========')
      return newState
    case SET_LATLON:
      newState.latitude = action.data.lat;
      newState.longitude = action.data.lon;
      return newState
    default:
      return state
  }
}