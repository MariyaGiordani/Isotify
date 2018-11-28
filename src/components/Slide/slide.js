import React from 'react';
import './slide.css';
import ButtonListenTo from '../ButtonListenTo/buttonListenTo';

const Slide = (props) => {
  return (
    <div className="slide">
      <img className="slide__image" alt="Artist" src={props.imgSrc} />
      <div className="slide__wrap">
        {props.name}
        <ButtonListenTo />
      </div>
    </div>
  );
};

export default Slide;
