import React from 'react';
import './buttonListenTo.css';

import listentoImg from '../../assets/img/listento.png';

const ButtonListenTo = ({ playerCallback }) => {
  return (
    <button className="button-listen" onClick={() => playerCallback()}>
      Listen to
      <div className="button-listen__circle">
        <img
          className="button-listen__triangle"
          alt="Triangle"
          src={listentoImg}
        />
      </div>
    </button>
  );
};

export default ButtonListenTo;
