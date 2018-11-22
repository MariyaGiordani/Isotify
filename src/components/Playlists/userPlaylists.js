import React, { Component } from 'react';

import './userPlaylists.css';
import { playlists } from '../../utils/spotifyResponseParsers';

import { getPlaylists } from '../../services/playlists';
import circle from '../../assets/img/circular.png';

const createPlaylist = ({
  namePlaylist,
  lengthTracks,
  nameUser,
  playlistLength
}) => (
  <div>
    <div className="playlists__container">
      <h2 className="container__title">{namePlaylist}</h2>
      <p className="container__subtitle">{lengthTracks} Tracks</p>
      <div className="container__line" />
      <div className="container__user-info">
        <img className="user-info__picture" alt="User Profile" src={circle} />
        <div className="user-info">
          <p className="user-info__name">{nameUser}</p>
          <p className="user-info__numero-playlists">
            {playlistLength} Playlists
          </p>
        </div>
      </div>
    </div>
  </div>
);

const mapPlaylist = (playlists) =>
  playlists.map((playlist) =>
    createPlaylist({ ...playlist, playlistLength: playlists.length })
  );
export class UserPlaylist extends Component {
  state = {
    playlists: []
  };
  componentDidMount = () => {
    getPlaylists().then((response) => {
      const playlistContent = playlists(response);
      this.setState({
        playlists: playlistContent
      });
    });
  };
  render = () => (
    <div className="content">
      <h1 className="content__title">Playlists</h1>
      <p className="content__subtitle">SEE WHAT'S POPPING THIS WEEK</p>
      <div className="content__playlists">
        {mapPlaylist(this.state.playlists)}
      </div>
    </div>
  );
}
