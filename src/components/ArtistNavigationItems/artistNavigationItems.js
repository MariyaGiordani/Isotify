import React, { Fragment } from 'react';

import AlbumsGrid from '../../components/albums/albumsGrid/albumsGrid';

import './artistNavigationItems.css';

const ArtistNavigationItems = () => (
  <Fragment>
    <div className="navigation-items">
      <a href="#albums">Albums</a>
      <a href="#songs">Songs</a>
      <a href="#playlists">Playlists</a>
      <a href="#whatsnew">What's new</a>
      <a href="#social">Social</a>
    </div>
  </Fragment>
);

export default ArtistNavigationItems;
