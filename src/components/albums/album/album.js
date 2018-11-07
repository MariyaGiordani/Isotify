import React from 'react';
import './album.css';

const Album = ({ imgSrc, size, title, artist }) => (
  <div className={`album album--${size}`}>
    <img src={imgSrc} alt={title} className="album__cover" />
    <div className="album__info">
      <div className="album__text">
        <p className="album__text-title">{title}</p>
        <p className="album__text-singer">{artist.name}</p>
      </div>
      <div className="album__options" />
    </div>
  </div>
);

export default Album;
