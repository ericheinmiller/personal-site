import React, { useState } from 'react';
import { connect } from 'react-redux';
import { closeWindow } from '../actions/folderActions';

const WindowButton = ({ icon, title, closeWindow, identifier }) => {
  const [pressed, setPressed] = useState(false);

  const handleMouseDown = () => {
    setPressed(true);
  };

  const handleMouseUp = () => {
    setPressed(false);
    closeWindow(identifier);
  };

  return (
    <div onMouseDown={() => handleMouseDown()} onMouseUp={() => handleMouseUp()} className={pressed ? 'window-button window-button--pressed' : 'window-button'}>
      <p className="window-button__icon">{ icon }</p>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  closeWindow: identifier => dispatch(closeWindow(identifier))
});

export default connect(null, mapDispatchToProps)(WindowButton);
