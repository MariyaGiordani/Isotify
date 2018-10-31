import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const ArtistsList = () => (
  <Fragment>
    <div className="container">
      <Link to="/artists/1">Artists</Link>
    </div>
  </Fragment>
);

export default ArtistsList;
