import React from 'react';

import HeaderLine from '../headerLine/headerLine';

import rightArrowPinkImg from '../../assets/img/arrowPink.png';

import './quarterGrid.css';

const QuarterGrid = ({ title, subtitle, children }) => {
  return (
    <div className="quarter-grid">
      <HeaderLine title={title} subtitle={subtitle}>
        <button className="quarter-grid__button">
          See all
          <img
            className="quarter-grid__button-image"
            alt="Right arrow"
            src={rightArrowPinkImg}
          />
        </button>
      </HeaderLine>
      {children}
    </div>
  );
};

export default QuarterGrid;
