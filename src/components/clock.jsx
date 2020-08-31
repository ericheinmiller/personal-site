import React, { useEffect, useState } from 'react';
import Internet from '../images/internet.png';
import Sound from '../images/sound.png';

export default () => {
  const [textClass, setTextClass] = useState('text--visible');
  const today = new Date();
  const hour = today.getHours();
  const minute = today.getMinutes();
  const seconds = today.getSeconds();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (textClass === 'text--visible') {
        setTextClass('text--invisible');
      } else {
        setTextClass('text--visible');
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [textClass, seconds]);


  return (
    <div className="clock">
      <img src={Internet} alt="Internet" />
      <img src={Sound} alt="Sound" />
      <div className="clock__text">
        { hour }
        <div className={textClass}>
          :
        </div>
        { minute }
      </div>
    </div>
  );
};
