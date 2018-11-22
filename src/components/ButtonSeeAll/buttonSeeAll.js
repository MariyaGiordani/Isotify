import React from 'react';
import './buttonSeeAll.css';
import rightArrowImg from '../../assets/img/rightArrow.png';

const ButtonSeeAll = () => (
  <button className="button__seeall ">
  See all
  <img
      className="button__seeall-image"
      alt="Right arrow"
      src={rightArrowImg}
    />
  </button>
);

export default ButtonSeeAll;