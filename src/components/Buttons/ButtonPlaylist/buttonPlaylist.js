import React from 'react';
import './buttonPlaylist.css';
import playlist from '../../../assets/img/playlist.png';

const ButtonPlaylist = () => (
  <button className="button-playlist ">
    <img className="button-playlist__icon" alt="" src={playlist} />
  </button>
);

export default ButtonPlaylist;
