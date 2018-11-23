import React from 'react';
import './buttonListenTo.css';

import listentoImg from '../../assets/img/listento.png';

const ButtonListenTo = () => (
  <button className="button__listen">
    Listen to
    <div className="button__listen-circle">
      <img
        className="button__listen-triangle"
        alt="Triangle"
        src={listentoImg}
      />
    </div>
  </button>
);

export default ButtonListenTo;
