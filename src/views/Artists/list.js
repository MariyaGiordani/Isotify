import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import SideBar from '../../components/Sidebar/sidebar';

export default () => {
  return (
    <Fragment>
      <SideBar />
      <div className="container">
        <Link to="/artists/1">Artists</Link>
      </div>
    </Fragment>
  );
};
