import React from 'react';

export default ({ icon }) => {
  const handleClick = (e) => {
    console.log('triggering');
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

  const noUrl = (
    <div onClick={() => {handleClick()}} className="icon">
      <a href={icon.file} download>
        <img src={icon.icon} alt="icon" className="icon__icon" />
        <p className="icon__title">
          { icon.title }
        </p>
      </a>
    </div>
  );

  const withUrl = (
    <div className="icon">
      <a href={icon.url}>
        <img src={icon.icon} alt="icon" className="icon__icon" />
        <p className="icon__title">
          { icon.title }
        </p>
      </a>
    </div>
  );
  return icon.url ? withUrl : noUrl;
};
