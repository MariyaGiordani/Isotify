import React from 'react';

import HeaderLine from '../headerLine/headerLine';

import rightArrowPinkImg from '../../assets/img/arrowPink.png';
import ButtonSeeAll from '../../components/ButtonSeeAll/buttonSeeAll';

import './quarterGrid.css';

const isActive = false;
const QuarterGrid = ({ title, subtitle, length, children }) => {
  const buttonVisible = !!length && isActive;
  return (
    <div className="quarter-grid">
      <HeaderLine title={title} subtitle={subtitle} size="big">
        {buttonVisible && (
          <ButtonSeeAll imgSrc={rightArrowPinkImg} type="search" />
        )}
      </HeaderLine>
      {children}
    </div>
  );
};

export default QuarterGrid;
