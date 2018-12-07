import React, { Fragment } from 'react';

import Sidebar from '../components/Sidebar/sidebar';
import Header from '../components/Header/header';

export function showMenus() {
  return (
    <Fragment>
      <Header />
      <Sidebar />
    </Fragment>
  );
}
