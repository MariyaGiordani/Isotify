import React from 'react';
import './buttonSeeAll.css';

const ButtonSeeAll = ({ imgSrc, type }) => (
  <button className={`button-see-all__${type}`}>
    See all
    <img className="button-see-all__image" alt="Right arrow" src={imgSrc} />
  </button>
);

export default ButtonSeeAll;
