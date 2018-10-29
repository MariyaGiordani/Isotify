import React, { Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import SideBar from '../../components/Sidebar/sidebar';
const access_token_storage = localStorage.getItem('access_token');
const userId = localStorage.getItem('userId');

const AlbumsList = () => {
  if (access_token_storage && userId) {
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
