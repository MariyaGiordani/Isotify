import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import SideBar from '../../components/Sidebar/sidebar';

const ArtistsList = () => (
  <Fragment>
    <SideBar />
    <div className="container">
      <Link to="/artists/1">Artists</Link>
    </div>
  </Fragment>
);

export default ArtistsList;
