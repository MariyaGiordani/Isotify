import React from 'react';

import HeaderLine from '../headerLine/headerLine';

import rightArrowPinkImg from '../../assets/img/arrowPink.png';
import ButtonSeeAll from '../../components/ButtonSeeAll/buttonSeeAll';

import './quarterGrid.css';

const QuarterGrid = ({ title, subtitle, length, children }) => {
  return (
    <div className="quarter-grid">
      <HeaderLine title={title} subtitle={subtitle}>
        {!!length && <ButtonSeeAll imgSrc={rightArrowPinkImg} type="search" />}
      </HeaderLine>
      {children}
    </div>
  );
};

export default QuarterGrid;
