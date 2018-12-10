import React from 'react';
import { Link } from 'react-router-dom';

import ArtistAlbumsGrid from '../../albums/artistAlbumsGrid/artistAlbumsGrid';
import shuffle from '../../../assets/img/shuffle.svg';
import semiarrow from '../../../assets/img/semiarrow.svg';
import arrow from '../../../assets/img/arrow.svg';

import './ArtistLine.css';

const ArtistLine = ({ artist: { imgSrc, name, id, albums, totalTracks } }) => {
  return (
    <div className="artist-line">
      <div className="artist-line__section">
        <div className="artist-line__upper-line">
          <Link to={`/artists/${id}`}>
            <img src={imgSrc} alt={name} className="artist-line__artist-icon" />
          </Link>
          <div className="artist-line__buttons">
            <img
              src={shuffle}
              alt="shuffle"
              className="artist-line__shuffle-button"
            />
            <div className="artist-line__more-dot" />
          </div>
        </div>
        <div className="artist-line__middle-line">
          <Link to={`/artists/${id}`}>
            <div className="artist-line__tittle">{name}</div>
            <div className="artist-line__more-info">
              {totalTracks} Songs, {albums.length} Albums
            </div>
          </Link>
        </div>
        <div className="artist-line__bottom-line">
          <Link to={`/artists/${id}`}>
            <div className="artist-line__see-more-button">
              See bio's
              <img
                src={arrow}
                alt="see artist's bio"
                className="artist-line__arrow"
              />
            </div>
          </Link>
        </div>
      </div>

      <div className="artist-line__albums">
        <div className="artist-line__upper-line artist-line__upper-line--spacer">
          <div className="artist-line__discography">Discography</div>
          <div className="artist-line__see-all">
            <Link to={`/artists/${id}`}>See all</Link>
            <img
              src={semiarrow}
              alt="See All"
              className="artist-line__semi-arrow"
            />
          </div>
        </div>

        <div className="artist-line__albums-bottom-line">
          <ArtistAlbumsGrid size="small" albums={albums.slice(0, 4)} />
        </div>
      </div>
      <div className="artist-line__bottom-corners" />
    </div>
  );
};
export default ArtistLine;
