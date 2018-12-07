import React from 'react';

import 'react-tippy/dist/tippy.css';
import { Tooltip } from 'react-tippy';

const createPopUp = (child, popup, position) => {
  return (
    <Tooltip
      useContext={true}
      html={popup}
      position={position}
      trigger="click focus"
      theme="light"
      animation="fade"
      interactive
    >
      {child}
    </Tooltip>
  );
};

export { createPopUp };
