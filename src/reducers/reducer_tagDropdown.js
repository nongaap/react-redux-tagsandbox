import { REMOVE_DROPDOWN_TAG, ADD_DROPDOWN_TAG } from '../actions/index';

const INITIAL_STATE = [
    {
      "label": "Hired",
      "color": "#00C361"
    }, {
      "label": "Highly Skilled",
      "color": "#FF7A1D"
    }, {
      "label": "Ruby",
      "color": "#9F0000"
    }, {
      "label": "Javascript",
      "color": "#FFCF2E"
    }
  ];

export default function (state = INITIAL_STATE, action) {
  switch(action.type) {
    case REMOVE_DROPDOWN_TAG:
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1)
      ];
    case ADD_DROPDOWN_TAG:
      return [
        ...state,
        action.payload
      ];
    default:
      return state;
  }
}
