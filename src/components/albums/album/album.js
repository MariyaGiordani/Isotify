import React from 'react';
import { Link } from 'react-router-dom';
import './album.css';

const Album = ({ imgSrc, size, title, artist }) => (
  <div className={`album album--${size}`}>
    <img src={imgSrc} alt={title} className="album__cover" />
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
