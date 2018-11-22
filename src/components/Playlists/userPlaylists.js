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
    <div className="user-playlists">
      <h2 className="user-playlists__name">{namePlaylist}</h2>
      <p className="user-playlists__tracks">{lengthTracks} Tracks</p>
      <div className="user-playlists__line" />
      <div className="user-playlists__user-info">
        <img className="user-info__picture" alt="User Profile" src={circle} />
        <div className="user-info">
          <p className="user-info__name">{nameUser}</p>
          <p className="user-info__number-playlists">
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
