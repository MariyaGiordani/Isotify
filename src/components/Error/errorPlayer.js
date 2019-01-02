import React, { Fragment } from 'react';

import './errorPlayer.css';

import { logOut } from '../../utils/logOut';

export const ErrorPlayer = ({ title }) => {
  return (
    <Fragment>
      <div className="error-player">
        <p className="error-player__title">{title}</p>
        <button className="error-player__button" onClick={logOut}>
          Refresh
        </button>
      </div>
    </Fragment>
  );
};
