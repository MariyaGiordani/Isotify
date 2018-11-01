import React from 'react';

import { isUserLogged } from './isUserLogged';
import Sidebar from '../components/Sidebar/sidebar';

export function showSidebar() {
  if (isUserLogged()) {
    return <Sidebar />;
  }
}
