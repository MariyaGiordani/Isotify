import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import SideBar from '../../components/Sidebar/sidebar';

const ArtistDetails = (props) => (
  <Fragment>
    <SideBar />
    <div className="container">
      <h1>Artist {props.match.params.artistId}</h1>
      <Link to="/artists">Back to Artists</Link>
    </div>
  </Fragment>
);

export default ArtistDetails;
