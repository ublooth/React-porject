import {CHANGE_STR, CHANGE_CITY} from './actionTypes';

export const setChangeStr = (idx) => ({
    type: CHANGE_STR,
    index: idx
})

export const setChangeCity = () => ({
    type: CHANGE_CITY
})