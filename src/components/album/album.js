import React from 'react';
import './album.css';

const Album = ({ imgSrc, size, title, author }) => (
  <div className="album">
    <img
      src={imgSrc}
      alt={title}
      className={'album__cover album__cover--' + size}
    />
    <div className="album__info">
      <div className="text">
        <p className="text__title">{title}</p>
        <p className="text__singer">{author}</p>
      </div>
      <div className="options" />
    </div>
  </div>
);

export default Album;
