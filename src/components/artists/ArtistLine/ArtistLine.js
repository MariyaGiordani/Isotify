import React from 'react';
import { Link } from 'react-router-dom';
import ArtistAlbumsGrid from '../../albums/artistAlbumsGrid/artistAlbumsGrid';
import shuffle from '../../../assets/img/shuffle.svg';
import './ArtistLine.css';

const ArtistLine = ({ artist }) => (
  <div className="artist-line">
    <div className="artist-line__section">
      <div className="artist-line__upper-line">
        <Link to={`/artists/${artist.id}`}>
          <img src={artist.imgSrc} alt={artist.name} className="artist-line__artist-icon" />
        </Link>
        <div className="artist-line__buttons">
          <img src={shuffle} alt="shuffle" className="artist-line__shuffle-button" />
          <div className="artist-line__more-dot" />
        </div>
      </div>
      <div className="artist-line__middle-line">
        <Link to={`/artists/${artist.id}`}>
          <div className="artist-line__tittle">{artist.name}</div>
          <div className="artist-line__more-info">{`${artist.albums.length} Albums, ${
            artist.totalTracks
          } Songs`}</div>
        </Link>
      </div>
      <div className="artist-line__bottom-line">
        <Link to={`/artists/${artist.id}`}>
          <div className="artist-line__see-more-button">see bio's</div>
        </Link>
      </div>
    </div>

    <div className="artist-line__albums">
      <div className="artist-line__upper-line">
        <div className="artist-line__discography">discography</div>
        <div className="artist-line__see-all"> see all </div>
      </div>

      <div className="artist-line__bottom-line">
        <ArtistAlbumsGrid size="small" albums={artist.albums.slice(0, 4)} />
      </div>
    </div>
  </div>
);
export default ArtistLine;
