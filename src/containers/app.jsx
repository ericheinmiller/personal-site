import React from 'react';
import { connect } from 'react-redux';
import Folder from './folder';
import Window from './window';
import StartBar from './startBar';
import StartMenu from './startMenu';
import Iterm from '../components/iterm';
import {
  deselectFolder,
  dragElement,
  setHighlightElement,
  toggleStartMenu,
  clearDragTarget,
} from '../actions/folderActions';

const App = ({
  deselectFolder,
  windowArray,
  toggle,
  folders,
  dragElement,
  setHighlightElement,
  toggleStartMenuAction,
  clearDragTargetAction,
  dragIdentifier,
  iterm,
}) => {
  const handleMouseDown = (e) => {
    const { className } = e.target;
    if (className !== 'folder') {
      deselectFolder();
    }
    if (className === 'app-container') {
      toggleStartMenuAction(false);
    }
  };

  const handleMouseMove = (e) => {
    if (dragIdentifier === null) {
      return;
    }
    dragElement(e.clientY, e.clientX);
  };

  const handleMouseUp = () => {
    clearDragTargetAction();
  };

  return (
    <div onMouseDown={(e) => handleMouseDown(e)} onMouseUp={() => handleMouseUp()} onMouseMove={(e) => handleMouseMove(e)} className="app-container">
      { folders.map((title) => <Folder key={`folder-${title}`} title={title} identifier={`folder-${title}`} />) }
      { toggle ? <StartMenu /> : null }
      <StartBar />
      { windowArray.length ? windowArray.map((item) => <Window title={item.title} key={`window-${item.title}`} identifier={`window-${item.title}`} />) : null }
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deselectFolder: () => dispatch(deselectFolder()),
  dragElement: (key, top, left) => dispatch(dragElement(key, top, left)),
  setHighlightElement: (identifier) => dispatch(setHighlightElement(identifier)),
  toggleStartMenuAction: (value) => dispatch(toggleStartMenu(value)),
  clearDragTargetAction: () => dispatch(clearDragTarget()),
});

const mapStateToProps = (state) => ({
  windowArray: state.window,
  folders: state.folder.folders,
  toggle: state.menu.toggle,
  dragIdentifier: state.position.identifier,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
