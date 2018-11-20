import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import './component.css';

import shuffleImage from '../../assets/img/shuffle.png';
import grayDots from '../../assets/img/gray-dots.png';
import pinkDots from '../../assets/img/pink-dots.png';

const Popup = (props) => {
  return (
    <Fragment>
      <div className="popup">
        <div className="popup__header">
          <div className="popup__title">
            <h1 className="popup__title--big-font">Album name</h1>
            <div className="popup__subtitle">
              <h2 className="popup__title--medium-font">Artist name</h2>
              <span className="popup__dot" />
              <p className="popup__title--small-font">2008</p>
            </div>
          </div>
          <div className="popup__images">
            <img className="images__shuffle" alt="Shuffle" src={shuffleImage} />
            <img className="images__three-dots" alt="Options" src={grayDots} />
          </div>
        </div>
        <div className="popup__line--gray" />
        <div className="popup__songs">
          <p className="popup__songs--gray">1</p>
          <p>Music name</p>
          <p className="popup__songs--gray">4:31</p>
        </div>
        <div className="popup__line--pink" />
        <Link to="/artists">
          <div className="related-link">
            <p className="related-link__text">Show Related</p>
            <img
              className="related-link__three-dots--horizontal"
              alt="Options"
              src={pinkDots}
            />
          </div>
        </Link>
      </div>
    </Fragment>
  );
};

export default Popup;
