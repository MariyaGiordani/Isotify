import React from 'react';
import PageContainer from '../PageContainer/pageContainer';
import HeaderLine from '../headerLine/headerLine';
import dinosaur from '../../assets/img/dinosaur.gif';

import './errorHandler.css';

const logOut = () => {
  localStorage.clear();
  window.location.reload();
};

export const ErrorHandler = () => {
  return (
    <PageContainer>
      <HeaderLine
        title={'Sorry, your session has expired.'}
        subtitle={'Please press the button to refresh the page.'}
      />
      <div className="error-handler">
        <img className="error-handler__image" src={dinosaur} alt="Wrong" />
        <button className="error-handler__button" onClick={logOut}>
          Refresh
        </button>
      </div>
    </PageContainer>
  );
};
