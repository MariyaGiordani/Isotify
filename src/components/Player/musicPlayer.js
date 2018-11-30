import React from 'react';

import './musicPlayer.css';
import playlisticon from '../../assets/img/playlisticon.png';
import prev from '../../assets/img/prev.png';
import pause from '../../assets/img/pause.png';
import next from '../../assets/img/next.png';
import volume from '../../assets/img/speaker.png';

export default () => (
  <div className="player">
    <div className="player__container">
      <button className="container__button">
        <div className="container__playlist-icon">
          <img
            className="playlist-icon__image"
            alt="Playlist-icon"
            src={playlisticon}
          />
        </div>
      </button>

      <div className="playlist-icon__music-info">
        <h1 className="music-info__name">Nome da música</h1>
        <h2 className="music-info__band">Nome da banda</h2>
      </div>
    </div>

    <div className="player__buttons">
      <button className="buttons__prev">
        <div className="buttons__prev-container">
          <img className="prev-container__image" alt="Prev Button" src={prev} />
        </div>
      </button>
      <button className="buttons__pause">
        <div className="buttons__pause-container">
          <img
            className="pause-container__image"
            alt="Pause Button"
            src={pause}
          />
        </div>
      </button>
      <button className="buttons__next">
        <div className="buttons__next-container">
          <img className="next-container__image" alt="Next Button" src={next} />
        </div>
      </button>
    </div>
    <button className="player__volume">
      <div className="player__volume-container">
        <img
          className="volume-container__image"
          alt="Playlist-icon"
          src={volume}
        />
      </div>
    </button>
  </div>
);
