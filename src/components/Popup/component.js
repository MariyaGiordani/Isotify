import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import './component.css';

import shuffleImage from '../../assets/img/shuffle.png';
import grayDots from '../../assets/img/gray-dots.png';
import pinkDots from '../../assets/img/pink-dots.png';

const createMusics = (tracks) =>
  tracks.map(({ songName, songDuration, songNumber, id }) => (
    <div className="popup__songs" key={id}>
      <p className="popup__songs-songNumber">{songNumber}</p>
      <p className="popup__songs-songName">{songName}</p>
      <p className="popup__songs-songDuration">{`${
        convertDuration(songDuration).min
      }:${convertDuration(songDuration).sec}`}</p>
    </div>
  ));

const convertDuration = (songDuration) => {
  const min = Math.floor((songDuration / 1000 / 60) << 0);
  const sec = Math.floor((songDuration / 1000) % 60);

  return { min, sec: sec < 10 ? '0' + sec : sec };
};

const relatedLink = (show) => {
  return (
    show && (
      <Fragment>
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
      </Fragment>
    )
  );
};

const Popup = (props) => {
  const { title, subtitle, date, tracks } = props;
  return (
    <div className="popup">
      <div className="popup__header">
        <div className="popup__title">
          <h1 className="popup__title--big-font">{title}</h1>
          <div className="popup__subtitle">
            <h2 className="popup__title--medium-font">{subtitle}</h2>
            <span className="popup__dot" />
            <p className="popup__title--small-font">{date.slice(0, 4)}</p>
          </div>
        </div>
        <div className="popup__images">
          <img className="images__shuffle" alt="Shuffle" src={shuffleImage} />
          <img className="images__three-dots" alt="Options" src={grayDots} />
        </div>
      </div>
      <div className="popup__line--gray" />

      <div>{createMusics(tracks)}</div>

      {relatedLink(false)}
    </div>
  );
};

export default Popup;
