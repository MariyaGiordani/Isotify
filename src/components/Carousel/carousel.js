import React from 'react';

import leftArrow from '../../assets/img/left-arrow.png';
import rightArrow from '../../assets/img/right-arrow.png';

import './carousel.css';

const Carousel = (props) => {
  return (
    <div className="carousel">
      <div className="carousel__image" />
      <div className="carousel__wrap">
        <div className="carousel__arrow">
          <img className="carousel__arrow" alt="Left arrow" src={leftArrow} />
        </div>
        <div className="carousel__arrow">
          <img className="carousel__arrow" alt="Right arrow" src={rightArrow} />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
