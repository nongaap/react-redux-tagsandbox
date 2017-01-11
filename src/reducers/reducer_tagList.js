import { DELETE_TAG, ADD_TAG } from '../actions/index';

const INITIAL_STATE = [];

export default function (state = INITIAL_STATE, action) {
  switch(action.type) {
    case DELETE_TAG:
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1)
      ];
    case ADD_TAG:
      return [
        ...state,
        action.payload
      ];
    default:
      return state;
  }
}
