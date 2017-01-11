import { ADD_ALL_TAG } from '../actions/index';

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
    case ADD_ALL_TAG:
      return [
        ...state,
        action.payload
      ];
    default:
      return state;
  }
}