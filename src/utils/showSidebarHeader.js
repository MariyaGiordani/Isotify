import React, { Fragment } from 'react';

import { isUserLogged } from './isUserLogged';
import Sidebar from '../components/Sidebar/sidebar';
import Header from '../components/Header/header';

export function showSidebarHeader() {
  if (isUserLogged()) {
    return (
      <Fragment>
        <Header />
        <Sidebar />
      </Fragment>
    );
  }
}
