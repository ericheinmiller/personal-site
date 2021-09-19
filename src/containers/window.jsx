import React, { useRef } from 'react';
import { connect } from 'react-redux';
import WindowButton from './windowButton';
import Icon from '../images/directory_closed-1.png';
import IconLink from '../components/icon';
import { deselectFolder, dragElement, setHighlightElement, toggleStartMenu, setDragTarget } from '../actions/folderActions';

const Window = ({
  title,
  identifier,
  windowArray,
  highlightedElement,
  setHighlightElementAction,
  setDragTargetAction,
  position,
}) => {
  const thisWindow = windowArray.filter((item) => item.identifier === identifier)[0];
  const targetElement = useRef(null);

  const handleMouseDown = (e) => {
    setHighlightElementAction(identifier);
    const initialLeft = e.clientX - parseInt(targetElement.current.style.left);
    const initialTop = e.clientY - parseInt(targetElement.current.style.top);
    setDragTargetAction(identifier, initialTop, initialLeft);
  };

  return (
    <div ref={targetElement} className={`window ${highlightedElement === identifier ? 'window-highlight' : null}`} style={position[identifier]}>
      <div onMouseDown={e => handleMouseDown(e)} className={`window-bar ${highlightedElement === identifier ? 'window-bar--highlight' : ''}`} identifier={identifier}>
        <div className="window-title">
          <img src={Icon} className="window-title__icon" alt="Icon" />
          <p className="window-title__title">{ title }</p>
        </div>
        <WindowButton icon="x" identifier={identifier} />
      </div>
      <div className="window__window">
        { thisWindow.content.map((icon) => <IconLink key={`icon-${icon.title}`} icon={icon} />) }
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  windowArray: state.window,
  position: state.position,
  highlightedElement: state.highlightedElement,
});

const mapDispatchToProps = (dispatch) => ({
  deselectFolder: () => dispatch(deselectFolder()),
  dragElement: (key, top, left) => dispatch(dragElement(key, top, left)),
  setHighlightElementAction: (identifier) => dispatch(setHighlightElement(identifier)),
  toggleStartMenuAction: (value) => dispatch(toggleStartMenu(value)),
  setDragTargetAction: (identifier, top, left) => dispatch(setDragTarget(identifier, top, left)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Window);
