import {
  TOGGLE_START_MENU,
  TOGGLE_SUB_MENU,
} from '../actions/actionsTypes';
import Content from '../content';

const initialState = {
  buttons: ['Resume', 'Social', 'Contact'],
  subMenu: [],
  toggle: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_START_MENU:
      return {
        ...state,
        toggle: action.payload,
      };
    case TOGGLE_SUB_MENU:
      return {
        ...state,
        subMenu: Content[action.payload],
      };
    default:
      return state;
  }
};
