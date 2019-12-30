import React from 'react';
import { connect } from 'react-redux';
import MenuButton from './startMenuButton';

const StartMenu = ({ windowArray, buttons }) => (
  <div className="startMenu">
    <div className="startMenu-wrapper">
      <div className="gradient-bar" />
      <div className="startMenu--container">
        <div className="menuButton">
          <p className="menuButton__title menuButton__title--introduction">Hi! My name is Eric Heinmiller and this is my Personal Site! Feel free to click around to get my contact information or see other projects!</p>
        </div>
        { buttons.map(title => <MenuButton key={`menu-${title}`} title={title} />) }
      </div>
    </div>
  </div>
);

const mapStateToProps = state => ({
  buttons: state.menu.buttons,
});

export default connect(mapStateToProps)(StartMenu);
