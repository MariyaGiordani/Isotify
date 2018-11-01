import React, { Fragment } from 'react';
import BannerArtist from '../../components/BannerArtist/bannerArtist';
import ArtistNavigationItems from '../../components/ArtistNavigationItems/artistNavigationItems';
import AlbumsGrid from '../../components/albums/albumsGrid/albumsGrid';

export default (props) => {
  return (
    <Fragment>
      <div className="container">
        <BannerArtist />
        <ArtistNavigationItems />
        <div className="container__wrap">
          <AlbumsGrid />
        </div>
      </div>
    </Fragment>
  );
};
