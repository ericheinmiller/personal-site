import {
  SET_HIGHLIGHT_ELEMENT,
  DOUBLE_CLICK_FOLDER,
} from '../actions/actionsTypes';

const initialState = null;

export default function greeting(state = initialState, action) {
  switch (action.type) {
    case SET_HIGHLIGHT_ELEMENT: {
      return action.payload;
    }
    case DOUBLE_CLICK_FOLDER:
      return `window-${action.payload.title}`;
    default:
      return state;
  }
}
