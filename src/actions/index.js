import { CLICK_UPDATE_VALUE } from './actionTypes';
import { CLICK_UPDATE_COUNT } from './actionTypes';
export const clickButton = value => ({
    type: CLICK_UPDATE_VALUE,
    newValue: value
  });

  export const countButton = value => ({
    type: CLICK_UPDATE_COUNT,
    newcountValue: value
  });

