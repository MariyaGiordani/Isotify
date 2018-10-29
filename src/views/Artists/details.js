import React, { Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';

import BannerArtist from '../../components/BannerArtist/bannerArtist';
import SideBar from '../../components/Sidebar/sidebar';

const storedState = localStorage.getItem('spotify_auth_state');

const ArtistDetails = (props) => {
  if (storedState) {
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
  } else {
    return <Redirect to="/login" />;
  }
};

export default ArtistDetails;
