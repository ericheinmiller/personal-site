import React from 'react';
import UnClickedFolder from '../images/directory_closed-4.png';

export default ({ title, icon, highlightedElement }) => (
  <div className={`barButton ${highlightedElement.includes(title) ? 'barButton--highlight' : null}`}>
    <div className="barButtonWrapper">
      <img src={UnClickedFolder} alt="icon" />
      <p className="barButton__text">{ title }</p>
    </div>
  </div>
);
