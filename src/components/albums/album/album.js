import React from 'react';
import './album.css';

const Album = ({ imgSrc, size, title, author }) => (
  <div className="album">
    <img
      src={imgSrc}
      alt={title}
      className={`album__cover album__cover--${size}`}
    />
    <div className="album__info">
      <div className="album__text">
        <p className="album__text-title">{title}</p>
        <p className="album__text-singer">{author}</p>
      </div>
      <div className="album__options" />
    </div>
  </div>
);

export default Album;
