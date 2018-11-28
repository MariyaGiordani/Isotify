import React from 'react';
import './buttonSeeAll.css';
import rightArrowImg from '../../assets/img/rightArrow.png';

const ButtonSeeAll = () => (
  <button className="button-see-all">
    See all
    <img
      className="button-see-all__image"
      alt="Right arrow"
      src={rightArrowImg}
    />
  </button>
);

export default ButtonSeeAll;
