import React from 'react';

export default ({ icon }) => {
  const noUrl = (
    <div className="icon">
      <a href={icon.file} download>
        <img src={icon.icon} className="icon__icon" />
        <p className="icon__title">
          { icon.title }
        </p>
      </a>
    </div>
  );
  const withUrl = (
    <div className="icon">
      <a href={icon.url}>
        <img src={icon.icon} className="icon__icon" />
        <p className="icon__title">
          { icon.title }
        </p>
      </a>
    </div>
  );
  return icon.url ? withUrl : noUrl;
};
