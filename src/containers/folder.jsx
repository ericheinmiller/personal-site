import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import UnClickedFolder from '../images/directory_closed-4.png';
import ClickedFolder from '../images/directory_closed-4-selected.png';
import { selectFolder, addFolder, doubleClickFolder, setHighlightElement } from '../actions/folderActions';

const Folder = ({
  title,
  selectFolder,
  addFolder,
  selectedFolders,
  doubleClickFolder,
  identifier,
  highlightElement,
}) => {
  let timer = null;

  const handleClick = (e) => {
    const shift = e.shiftKey;
    if (timer) {
      clearTimeout(timer);
      timer = null;
      doubleClickFolder(identifier, title);
    } else {
      timer = setTimeout(() => {
        if (shift) {
          addFolder(title);
        } else {
          selectFolder(title);
        }
      }, 200);
      return () => clearTimeout(timer);
    }
  };

  return (
    <div onClick={e => handleClick(e)} role="button" className="folder-container">
      <img identifier={identifier} className="folder" alt="Folder" src={selectedFolders.includes(title) ? ClickedFolder : UnClickedFolder} />
      <p className={selectedFolders.includes(title) ? 'clickedText folder' : 'folder'}>{ title }</p>
    </div>
  );
};

const mapStateToProps = state => ({
  selectedFolders: state.folder.selectedFolders,
  highlightElement: state.highlightELement,
});

const mapDispatchToProps = dispatch => ({
  selectFolder: title => dispatch(selectFolder(title)),
  addFolder: title => dispatch(addFolder(title)),
  doubleClickFolder: (identifier, title) => dispatch(doubleClickFolder(identifier, title)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Folder);
