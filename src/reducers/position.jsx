import {
  DOUBLE_CLICK_FOLDER,
  CLOSE_WINDOW,
  DRAG_ELEMENT,
  SET_DRAG_TARGET,
  CLEAR_DRAG_TARGET,
} from '../actions/actionsTypes';

const initialState = {
  initialTop: null,
  initialLeft: null,
  identifier: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DOUBLE_CLICK_FOLDER: {
      const identifier = `window-${action.payload.title}`;
      if (state[action.payload.identifier]) {
        return state;
      }
      return {
        ...state,
        [identifier]: {
          top: '200px',
          left: '200px',
        },
      };
    }
    case CLOSE_WINDOW: {
      const { [action.payload.identifier]: removed, ...newState } = state;
      return newState;
    }
    case SET_DRAG_TARGET:
      return {
        ...state,
        identifier: action.payload.identifier,
        initialTop: action.payload.top,
        initialLeft: action.payload.left,
      };
    case CLEAR_DRAG_TARGET:
      return {
        ...state,
        identifier: null,
        initialTop: null,
        initialLeft: null,
      };
    case DRAG_ELEMENT: {
      const left = action.payload.left - state.initialLeft;
      const top = action.payload.top - state.initialTop;
      return {
        ...state,
        [state.identifier]: {
          top: `${top}px`,
          left: `${left}px`,
        },
      };
    }
    default:
      return state;
  }
};
