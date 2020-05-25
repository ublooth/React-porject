import {SET_GEOHASH} from './actionType'

let dataStore = {
  geohash: ''
}

export default (state = dataStore, action) => {
  let newState = state
  switch (action.type) {
    case SET_GEOHASH:
      newState.geohash = action.data;
      console.log(newState, '========')
      return newState
      // break;
    default:
      return state
  }
}