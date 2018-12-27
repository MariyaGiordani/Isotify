import React, { Fragment } from 'react';

import Sidebar from '../components/Sidebar/sidebar';
import Header from '../components/Header/header';
import { updateAppClasses } from '../utils/theming';

export function showMenus() {
  updateAppClasses();
  return (
    <Fragment>
      <Header />
      <Sidebar />
    </Fragment>
  );
}
