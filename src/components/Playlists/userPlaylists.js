import React, { Component } from 'react';

import './userPlaylists.css';
import { playlists } from '../../utils/spotifyResponseParsers';
import { getPlaylists } from '../../services/playlists';
import { getUserInfo } from '../../services/user';
import { userInfo as parseUserInfo } from '../../utils/spotifyResponseParsers';
import HeaderLine from '../headerLine/headerLine';

const createPlaylist = ({
  idPlaylist,
  lengthTracks,
  namePlaylist,
  nameUser,
  playlistLength,
  profilePicture
}) => (
  <div key={idPlaylist}>
    <div className="user-playlists">
      <h2 className="user-playlists__name">{namePlaylist}</h2>
      <p className="user-playlists__tracks">{lengthTracks} Tracks</p>
      <div className="user-playlists__line" />
      <div className="user-playlists__user-info">
        <img
          className="user-info__picture"
          alt="User Profile"
          src={profilePicture}
        />
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

const mapPlaylistInfo = (playlists, profilePicture) =>
  playlists.map((playlist) =>
    createPlaylist({
      ...playlist,
      playlistLength: playlists.length,
      profilePicture
    })
  );

export class UserPlaylist extends Component {
  state = {
    playlists: [],
    profilePicture: ''
  };

  componentDidMount = () => {
    getPlaylists().then((response) => {
      const playlistContent = playlists(response);
      this.setState({
        playlists: playlistContent
      });
    });

    getUserInfo().then((response) => {
      const { profilePicture } = parseUserInfo(response);
      this.setState({
        profilePicture
      });
    });
  };

  render = () => {
    const title = 'Playlists';
    const subtitle = "SEE WHAT'S POPPING THIS WEEK";
    const { playlists, profilePicture } = this.state;
    return (
      <div className="user-playlists__content">
        <HeaderLine title={title} subtitle={subtitle} />
        <div className="content__playlists">
          {mapPlaylistInfo(playlists, profilePicture)}
        </div>
      </div>
    );
  };
}
