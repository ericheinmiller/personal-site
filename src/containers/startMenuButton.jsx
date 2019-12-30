import React, { useState } from 'react';
import { connect } from 'react-redux';
import UnClickedFolder from '../images/directory_closed-4.png';
import SubMenu from '../components/subMenuButton';
import { toggleSubMenu } from '../actions/folderActions';

const MenuButton = ({ title, toggleSubMenuAction, subMenu }) => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = e => {
    setIsHovering(true);
    toggleSubMenuAction(title);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const renderSubMenu = () => {
    if (isHovering) {
      return (
        <div className="menuButton-subMenu-container">
          <div className="menuButton-subMenu-container-wrapper">
            { subMenu.map(item => <SubMenu icon={item.icon} title={item.title} url={item.url} file={item.file} key={`subMenu-${item.title}`} />) }
          </div>
        </div>
      )
    }
    return null;
  };

  return (
    <div onMouseEnter={e => handleMouseEnter(e)} onMouseLeave={() => handleMouseLeave()} className="menuButton">
      <img className="menuButton__icon" src={UnClickedFolder} />
      <p className="menuButton__title">{ title }</p>
      <p className="menuButton__arrow">&#9658;</p>
      { renderSubMenu() }
    </div>
  );
};

const mapStateToProps = state => ({
  subMenu: state.menu.subMenu,
  subMenuTitle: state.menu.toggledTitle,
});

const mapDispatchToProps = dispatch => ({
  toggleSubMenuAction: title => dispatch(toggleSubMenu(title)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuButton);
