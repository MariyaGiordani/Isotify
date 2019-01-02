import React, { Fragment } from 'react';
import HeaderLine from '../headerLine/headerLine';
import dinosaur from '../../assets/img/dinosaur.gif';

import './errorHandler.css';

import { logOut } from '../../utils/logOut';

export const ErrorHandler = ({ title, subtitle }) => {
  return (
    <Fragment>
      <HeaderLine title={title} subtitle={subtitle} />
      <div className="error-handler">
        <img className="error-handler__image" src={dinosaur} alt="Wrong" />
        <button className="error-handler__button" onClick={logOut}>
          Refresh
        </button>
      </div>
    </Fragment>
  );
};
