import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import BannerArtist from '../../components/BannerArtist/bannerArtist';
import SideBar from '../../components/Sidebar/sidebar';

export default (props) => {
  return (
    <Fragment>
      <SideBar />
      <div className="container">
        <BannerArtist />
        <h1>Artist {props.match.params.artistId}</h1>
        <Link to="/artists">Back to Artists</Link>
      </div>
    </Fragment>
  );
};
