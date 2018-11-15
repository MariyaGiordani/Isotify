import React from 'react';
import { Link } from 'react-router-dom';
import ArtistAlbumsGrid from '../../albums/artistAlbumsGrid/artistAlbumsGrid';
import shuffle from '../../../assets/img/shuffle.svg';
import semiarrow from '../../../assets/img/semiarrow.svg';
import arrow from '../../../assets/img/arrow.svg';
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
          <img src={arrow} alt="see artist's bio" className="artist-line__arrow" />
        </Link>
      </div>
    </div>

    <div className="artist-line__albums">
      <div className="artist-line__upper-line artist-line__upper-line--spacer">
        <div className="artist-line__discography">Discography</div>
        <div className="artist-line__see-all">
          See all
          <img src={semiarrow} alt="See All" className="artist-line__semi-arrow" />
        </div>
      </div>

      <div className="artist-line__bottom-line">
        <ArtistAlbumsGrid size="small" albums={artist.albums.slice(0, 4)} />
      </div>
    </div>
  </div>
);
export default ArtistLine;
