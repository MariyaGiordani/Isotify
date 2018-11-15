import React from 'react';
import { Link } from 'react-router-dom';
import './album.css';
import 'react-tippy/dist/tippy.css';
import { Tooltip } from 'react-tippy';
import Popup from '../../Popup/component';

const Album = ({ imgSrc, size, title, artist }) => (
  <div className={`album album--${size}`}>
    <Tooltip
      useContext={true}
      html={<Popup />}
      position="right-start"
      trigger="click focus"
      theme="light"
      animation="fade"
      interactive
    >
      <img src={imgSrc} alt={title} className="album__cover" />
    </Tooltip>
    <div className="album__info">
      <div className="album__text">
        <p className="album__text-title">{title}</p>
        <Link to={`/artists/${artist.id}`}>
          <p className="album__text-singer">{artist.name}</p>
        </Link>
      </div>
      <div className="album__options" />
    </div>
  </div>
);

export default Album;
