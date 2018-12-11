import React from 'react';
import { Link } from 'react-router-dom';
import wrong from '../../assets/img/wrong.gif';

export const errorHandler = (shouldShow) => {
  return (
    shouldShow && (
      <div>
        <h1>Something went</h1>
        <img src={wrong} alt="Wrong" />
        <p />
        <button>
          <Link to="/" />
        </button>
      </div>
    )
  );
};
