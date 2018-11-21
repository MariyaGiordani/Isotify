import React from 'react';

import './userPlaylists.css';

import { getPlaylists } from '../../services/playlists';
import circle from '../../assets/img/circular.png';

export const UserPlaylist = () => {
  getPlaylists();
  return (
    <div className="content">
      <h1 className="content__title">Playlists</h1>
      <p className="content__subtitle">SEE WHAT'S POPPING THIS WEEK</p>
      <div className="content__playlists">
        <div className="playlists__container">
          <h2 className="container__title">Nome Playlist</h2>
          <p className="container__subtitle">Num Tracks</p>
          <div className="container__line" />
          <div className="container__user-info">
            <img
              className="user-info__picture"
              alt="User Profile"
              src={circle}
            />
            <div className="user-info">
              <p className="user-info__name">Nome do Usuário</p>
              <p className="user-info__numero-playlists">Num PLAYLISTS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
