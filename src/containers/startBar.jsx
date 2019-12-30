import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Logo from '../images/start-button-edited.png';
import StartBarButton from '../components/startBarButton';
import Clock from '../components/clock';
import { toggleStartMenu } from '../actions/folderActions';

const StartBar = ({ windowArray, toggleStartMenuAction, toggle, highlightedElement }) => {
  const handleClick = () => {
    if (!toggle) {
      toggleStartMenuAction(true);
    } else {
      toggleStartMenuAction(false);
    }
  };

  return (
    <div className="startBar">
      <div onClick={() => handleClick()} className="startBarButton startBarbutton--first">
        <div className="startBarButtonWrapper">
          <img className="startBarButton__logo" alt="Logo" src={Logo} />
        </div>
      </div>
      <div className="break--left" />
      { windowArray.map(item => <StartBarButton key={item.identifier} title={item.title} highlightedElement={highlightedElement} />) }
      <div className="break" />
      <Clock />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleStartMenuAction: toggle => dispatch(toggleStartMenu(toggle)),
});

const mapStateToProps = state => ({
  windowArray: state.window,
  highlightedElement: state.highlightedElement,
  toggle: state.menu.toggle,
});

export default connect(mapStateToProps, mapDispatchToProps)(StartBar);
