import React from 'react';

export default ({ title, icon, url, file }) => {
  const noUrl = (
    <a className="subMenuButton" href={file} download>
      <img className="subMenuButton__icon" src={icon} />
      <p className="subMenuButton__title">{ title }</p>
    </a>
  );
  const Url = (
    <a className="subMenuButton" href={url}>
      <img className="subMenuButton__icon" src={icon} />
      <p className="subMenuButton__title">{ title }</p>
    </a>
  );
  return url ? Url : noUrl;
};
