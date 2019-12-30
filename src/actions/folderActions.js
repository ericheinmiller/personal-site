import {
  SELECT_FOLDER,
  DESELECT_FOLDER,
  ADD_FOLDER,
  DOUBLE_CLICK_FOLDER,
  CLOSE_WINDOW,
  DRAG_ELEMENT,
  SET_HIGHLIGHT_ELEMENT,
  TOGGLE_START_MENU,
  TOGGLE_SUB_MENU,
  SET_DRAG_TARGET,
  CLEAR_DRAG_TARGET,
} from './actionsTypes';

const selectFolder = title => ({ type: SELECT_FOLDER, payload: title });

const deselectFolder = () => ({ type: DESELECT_FOLDER });

const addFolder = title => ({ type: ADD_FOLDER, payload: title });

const closeWindow = identifier => ({ type: CLOSE_WINDOW, payload: identifier });

const doubleClickFolder = (identifier, title) => ({ type: DOUBLE_CLICK_FOLDER, payload: {
  identifier,
  title,
} });

const dragElement = (top, left) => ({ type: DRAG_ELEMENT, payload: { top, left } });

const setHighlightElement = identifier => ({ type: SET_HIGHLIGHT_ELEMENT, payload: identifier });

const toggleStartMenu = toggle => ({ type: TOGGLE_START_MENU, payload: toggle });

const toggleSubMenu = title => ({ type: TOGGLE_SUB_MENU, payload: title });

const setDragTarget = (identifier, top, left) => ({ type: SET_DRAG_TARGET, payload: { identifier, top, left } });

const clearDragTarget = identifier => ({ type: CLEAR_DRAG_TARGET, payload: identifier });

export {
  selectFolder,
  deselectFolder,
  addFolder,
  doubleClickFolder,
  closeWindow,
  dragElement,
  setHighlightElement,
  toggleStartMenu,
  toggleSubMenu,
  setDragTarget,
  clearDragTarget,
};
