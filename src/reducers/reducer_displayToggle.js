import { SHOW_DROPDOWN, HIDE_DROPDOWN, SHOW_COLOR, HIDE_COLOR, SHOW_PICKER, HIDE_PICKER } from '../actions/index';

const INITIAL_STATE = {
  dropdownDisplay: "none",
  colorDisplay: "none",
  colorPicker: "inline-block"
};

export default function (state = INITIAL_STATE, action) {
  switch(action.type) {
    case SHOW_DROPDOWN:
      return { ...state, dropdownDisplay: action.payload };
    case HIDE_DROPDOWN:
      return { ...state, dropdownDisplay: action.payload };
    case SHOW_COLOR:
      return { ...state, colorDisplay: action.payload };
    case HIDE_COLOR:
      return { ...state, colorDisplay: action.payload };
    case SHOW_PICKER:
      return { ...state, colorPicker: action.payload };
    case HIDE_PICKER:
      return { ...state, colorPicker: action.payload };
    default:
      return state;
  }
}
