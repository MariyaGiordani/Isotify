import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import './component.css';

import shuffleImage from '../../assets/img/shuffle.png';
import grayDots from '../../assets/img/gray-dots.png';
import pinkDots from '../../assets/img/pink-dots.png';

const Popup = (props) => {
  return (
    <Fragment>
      <div className="popup-content">
        <div className="popup-content__header">
          <div className="popup-content__title">
            <h1 className="popup-content__title--h1">Album name</h1>
            <div className="popup-content__subtitle">
              <h2 className="popup-content__title--h2">Artist name</h2>
              <span className="popup-content__dot" />
              <p className="popup-content__title--p">2008</p>
            </div>
          </div>
          <div className="popup-content__images">
            <img className="images__shuffle" alt="Shuffle" src={shuffleImage} />
            <img className="images__three-dots" alt="Options" src={grayDots} />
          </div>
        </div>
        <div className="popup-content__line--gray" />
        <div className="popup-content__songs">
          <p className="popup-content__songs--gray">1</p>
          <p>Music name</p>
          <p className="popup-content__songs--gray">4:31</p>
        </div>
        <div className="popup-content__songs">
          <p className="popup-content__songs--gray">1</p>
          <p>Music name</p>
          <p className="popup-content__songs--gray">4:31</p>
        </div>
        <div className="popup-content__songs">
          <p className="popup-content__songs--gray">1</p>
          <p>Music name</p>
          <p className="popup-content__songs--gray">4:31</p>
        </div>
        <div className="popup-content__songs">
          <p className="popup-content__songs--gray">1</p>
          <p>Music name</p>
          <p className="popup-content__songs--gray">4:31</p>
        </div>
        <div className="popup-content__songs">
          <p className="popup-content__songs--gray">1</p>
          <p>Music name</p>
          <p className="popup-content__songs--gray">4:31</p>
        </div>
        <div className="popup-content__songs">
          <p className="popup-content__songs--gray">1</p>
          <p>Music name</p>
          <p className="popup-content__songs--gray">4:31</p>
        </div>
        <div className="popup-content__songs">
          <p className="popup-content__songs--gray">1</p>
          <p>Music name</p>
          <p className="popup-content__songs--gray">4:31</p>
        </div>
        <div className="popup-content__songs">
          <p className="popup-content__songs--gray">1</p>
          <p>Music name</p>
          <p className="popup-content__songs--gray">4:31</p>
        </div>
        <div className="popup-content__songs">
          <p className="popup-content__songs--gray">1</p>
          <p>Music name</p>
          <p className="popup-content__songs--gray">4:31</p>
        </div>
        <div className="popup-content__songs">
          <p className="popup-content__songs--gray">1</p>
          <p>Music name</p>
          <p className="popup-content__songs--gray">4:31</p>
        </div>
        <div className="popup-content__songs">
          <p className="popup-content__songs--gray">1</p>
          <p>Music name</p>
          <p className="popup-content__songs--gray">4:31</p>
        </div>
        <div className="popup-content__line--pink" />
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
