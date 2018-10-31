import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import BannerArtist from '../../components/BannerArtist/bannerArtist';

const ArtistDetails = (props) => (
  <Fragment>
    <div className="container">
      <BannerArtist />
      <Link to="/artists">Back to Artists</Link>
    </div>
  </Fragment>
);

export default ArtistDetails;
