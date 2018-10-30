import React, { Fragment } from 'react';
import BannerArtist from '../../components/BannerArtist/bannerArtist';
import SideBar from '../../components/Sidebar/sidebar';
import ArtistNavigationItems from '../../components/ArtistNavigationItems/artistNavigationItems';
import AlbumsGrid from '../../components/albums/albumsGrid/albumsGrid';

const ArtistDetails = (props) => (
  <Fragment>
    <SideBar />
    <div className="container">
      <BannerArtist />
      <ArtistNavigationItems />
      <div className="container__wrap">
        <AlbumsGrid />
      </div>
    </div>
  </Fragment>
);

export default ArtistDetails;
