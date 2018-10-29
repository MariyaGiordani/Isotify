import React, { Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import BannerArtist from '../../components/BannerArtist/bannerArtist';
import SideBar from '../../components/Sidebar/sidebar';
const access_token_storage = localStorage.getItem('access_token');
const userId = localStorage.getItem('userId');

const ArtistDetails = (props) => {
  if (access_token_storage && userId) {
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
