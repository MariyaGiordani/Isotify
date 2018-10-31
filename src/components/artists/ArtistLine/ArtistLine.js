import React from 'react';
import AlbumsGrid from '../../albums/albumsGrid/albumsGrid';
import shuffle from '../../../assets/img/shuffle.svg';
import './ArtistLine.css';

const ArtistLine = ({ artist }) => (
  <div className="artist-line">
    <div className="artist-line__section">
      <div className="artist-line__upper-line">
        <img
          src={artist.images[0].url}
          alt={artist.name}
          className="artist-line__artist-icon"
        />
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
        <div className="artist-line__tittle">{artist.name}</div>
        <div className="artist-line__more-info">some random Info</div>
      </div>
      <div className="artist-line__bottom-line">
        <div className="artist-line__see-more-button">see bio's</div>
      </div>
    </div>

    <div className="artist-line__albums">
      <div className="artist-line__upper-line">
        <div className="artist-line__discography">discography</div>
        <div className="artist-line__see-all"> see all </div>
      </div>

      <div className="artist-line__bottom-line">
        <AlbumsGrid size="small" albums={artist.albums.slice(0, 4)} />
      </div>
    </div>
  </div>
);
export default ArtistLine;
