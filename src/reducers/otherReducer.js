import { CLICK_UPDATE_COUNT } from '../actions/actionTypes';

const initialState = {
  countValue: ' utilizações desse botão'
  };
  export const otherReducer = (state = initialState, action) => {
    switch (action.type) {
      case CLICK_UPDATE_COUNT:
        return {
          ...state,
          countValue: action.countValue
        };
      default:
        return state;
    }
  };