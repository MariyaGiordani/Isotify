import React, { Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import SideBar from '../../components/Sidebar/sidebar';
const storedState = localStorage.getItem('spotify_auth_state');

const ArtistsList = () => {
  if (storedState) {
    return (
      <Fragment>
        <SideBar />
        <div className="container">
          <Link to="/artists/1">Artists</Link>
        </div>
      </Fragment>
    );
  } else {
    return <Redirect to="/login" />;
  }
};

export default ArtistsList;
