import React from 'react';
import Internet from '../images/internet.png';
import Sound from '../images/sound.png';

export default () => (
  <div className="clock">
    <img src={Internet} alt="Internet" />
    <img src={Sound} alt="Sound" />
    <p className="clock__text">
      {
        new Date().toLocaleTimeString('en-US', {
          hour12: false,
          hour: 'numeric',
          minute: 'numeric',
        })
      }
    </p>
  </div>
);
