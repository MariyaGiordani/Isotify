import React from 'react';
import './slide.css';

const Slide = ({ property }) => {
  const { picture } = property;
  return <img className="slide" alt="" src={picture} />;
};

export default Slide;
