import React from 'react';
import './slide.css';
import ButtonListenTo from '../ButtonListenTo/buttonListenTo';

const Slide = (props) => {
  return (
    <div className="slide">
      <img className="slide__image" alt="" src={props.imgSrc} />
      <ButtonListenTo />
    </div>
  );
};

export default Slide;
