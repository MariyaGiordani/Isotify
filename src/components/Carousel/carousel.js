import React from 'react';

import leftArrow from '../../assets/img/left-arrow.png';
import rightArrow from '../../assets/img/right-arrow.png';

import './carousel.css';

const Carousel = (props) => {
  return (
    <div className="carousel">
      <div className="carousel__image" />
      <div className="carousel__wrap">
        <img
          className="carousel__arrow--left"
          alt="Left arrow"
          src={leftArrow}
        />
        <img
          className="carousel__arrow--right"
          alt="Right arrow"
          src={rightArrow}
        />
      </div>
    </div>
  );
};

export default Carousel;
