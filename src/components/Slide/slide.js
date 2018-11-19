import React from 'react';
import './slide.css';

const Slide = (props) => {
  return <img className="slide" alt="" src={props.imgSrc} />;
};

export default Slide;
