import React, { Fragment } from 'react';

import './artistNavigationItems.css';

const ArtistNavigationItems = () => (
  <Fragment>
    <div className="navigation-items">
      <a className="navigation-items__text active" href="#albums">
        Albums
      </a>
      <a className="navigation-items__text" href="#songs">
        Songs
      </a>
      <a className="navigation-items__text" href="#playlists">
        Playlists
      </a>
      <a className="navigation-items__text" href="#whatsnew">
        What's new
      </a>
      <a className="navigation-items__text" href="#social">
        Social
      </a>
    </div>
  </Fragment>
);

export default ArtistNavigationItems;
