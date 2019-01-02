import React from 'react';

import rightArrowImg from '../../assets/img/rightArrow.png';
import AlbumsGrid from '../../components/albums/albumsGrid/albumsGrid';

import HeaderLine from '../headerLine/headerLine';
import ButtonSeeAll from '../ButtonSeeAll/buttonSeeAll';

import './whatsNew.css';

const title = 'What\'s new';
const subtitle = 'SEE WHAT\'S POPPING THIS WEEK';
const WhatsNew = ({ albums }) => {
  return (
    <div className="whats-new">
      <div className="whats-new__divider" />
      <div className="whats-new__header">
        <HeaderLine title={title} subtitle={subtitle} size="big">
          <ButtonSeeAll imgSrc={rightArrowImg} type="whats-new" />
        </HeaderLine>
      </div>
      <div className="whats-new__album">
        <AlbumsGrid albums={albums} size="quarter" gridSize="quarter" />
      </div>
    </div>
  );
};

export default WhatsNew;
