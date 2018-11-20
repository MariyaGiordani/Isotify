import React from 'react';
import './slide.css';
import ButtonListenTo from '../ButtonListenTo/buttonListenTo';

const Slide = (props) => {
  return (
    <div className="slide">
      <img className="slide__image" alt="" src={props.imgSrc} />
      <div className="slide__wrape">
        {props.name}
        <ButtonListenTo />
      </div>
    </div>
  );
};

export default Slide;
