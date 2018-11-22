import React, { Fragment } from 'react';
import './whatsNew.css';
import ButtonSeeAll from '../ButtonSeeAll/buttonSeeAll';
import AlbumsGrid from '../../components/albums/albumsGrid/albumsGrid';
import HeaderLine from '../headerLine/headerLine';

const title = 'What\'s new';
const subtitle = 'SEE WHAT\'S POPPING THIS WEEK';
const WhatsNew = (props) => {
  return (
    <Fragment>
      <div className="whats-new">
        <div className="whats-new__devider" />
        <div className="whats-new__header">
          <HeaderLine title={title} subtitle={subtitle}>
            <ButtonSeeAll />
          </HeaderLine>
        </div>
        <AlbumsGrid albums={props.albums} size="quarter" />
      </div>
      <div className="whats-new__devider whats-new__devider--margin" />
    </Fragment>
  );
};

export default WhatsNew;
