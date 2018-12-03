import React, { Fragment } from 'react';

import Sidebar from '../components/Sidebar/sidebar';
import Header from '../components/Header/header';
import Player from '../components/Player/musicPlayer';

export function showMenus() {
  return (
    <Fragment>
      <Header />
      <Sidebar />
      <Player />
    </Fragment>
  );
}
