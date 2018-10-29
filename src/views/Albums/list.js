import React, { Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';

import SideBar from '../../components/Sidebar/sidebar';

const storedState = localStorage.getItem('spotify_auth_state');

const AlbumsList = () => {
  if (storedState) {
    return (
      <Fragment>
        <SideBar />
        <div className="container">
          <h1>ALBUMS</h1>
          <Link to="/artists">Artists</Link>
        </div>
      </Fragment>
    );
  } else {
    return <Redirect to="/login" />;
  }
};

export default AlbumsList;
