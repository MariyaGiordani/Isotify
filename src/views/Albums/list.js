import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <Fragment>
      <div className="container">
        <h1>ALBUMS</h1>
        <Link to="/artists">Artists</Link>
      </div>
    </Fragment>
  );
};
