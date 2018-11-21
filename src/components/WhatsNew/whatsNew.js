import React from 'react';
import './whatsNew.css';
// import ButtonSeeAll from '../ButtonSeeAll/buttonSeeAll';
import AlbumsGrid from '../../components/albums/albumsGrid/albumsGrid';

const WhatsNew = (props) => {
  return (
    <div className="whats-new">
      <div className="whats-new__devider" />
      What's new SEE WHAT'S POPPING THIS WEEKEND
      {/* <ButtonSeeAll/> */}
      <AlbumsGrid albums={props.albums} size="quarter" />
    </div>
  );
};

export default WhatsNew;
