import {
  SELECT_FOLDER,
  DESELECT_FOLDER,
  ADD_FOLDER,
} from '../actions/actionsTypes';

const initialState = {
  folders: ['Resume', 'Social', 'Contact', 'Apps'],
  selectedFolders: [],
};

export default function greeting(state = initialState, action) {
  switch (action.type) {
    case SELECT_FOLDER:
      return {
        ...state,
        selectedFolders: [action.payload],
      };
    case ADD_FOLDER:
      return {
        ...state,
        selectedFolders: [...state.selectedFolders, action.payload],
      };
    case DESELECT_FOLDER:
      return {
        ...state,
        selectedFolders: [],
      };
    default:
      return state;
  }
}
