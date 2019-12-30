import { combineReducers } from 'redux';
import folder from './folder';
import window from './window';
import highlightedElement from './highlightedElement';
import menu from './menu';
import position from './position';

export default combineReducers({
  folder,
  highlightedElement,
  window,
  menu,
  position,
});
