import {
  DOUBLE_CLICK_FOLDER,
  CLOSE_WINDOW,
  DRAG_ELEMENT,
} from '../actions/actionsTypes';
import Content from '../content';

const initialState = [];
export default (state = initialState, action) => {
  switch (action.type) {
    case DOUBLE_CLICK_FOLDER: {
      let folderExists = false;
      for (const item of state) {
        if (`folder-${item.title}` === action.payload.identifier) {
          folderExists = true;
        }
      }
      if (folderExists) {
        return state;
      }
      return [
        ...state, {
          identifier: `window-${action.payload.title}`,
          title: action.payload.title,
          content: Content[action.payload.title],
        },
      ];
    }
    case CLOSE_WINDOW:
      return state.filter(item => item.identifier !== action.payload);

    default:
      return state;
  }
};
