import React, { Fragment } from 'react';

import AlbumsGrid from '../../components/albums/albumsGrid/albumsGrid';
import ArtistNavigationItems from '../../components/ArtistNavigationItems/artistNavigationItems';

import './artistNavigation.css';

const ArtistNavigation = (props) => (
  <Fragment>
    <ArtistNavigationItems />
    <div className="artists__navigation-wrap">
      <AlbumsGrid albums={props.albums} size="big" />
    </div>
  </Fragment>
);

export default ArtistNavigation;
