import React from 'react';
import wrong from '../../assets/img/wrong.gif';
import { logOut } from '../../services/spotify';

export const ErrorHandler = () => {
  return (
    <div>
      <h1>Something went</h1>
      <img src={wrong} alt="Wrong" />
      <p />
      <button onClick={logOut()}>Reload</button>
    </div>
  );
};
