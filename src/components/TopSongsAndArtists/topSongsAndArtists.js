import React, { Fragment } from 'react';
import songIcon from '../../assets/img/headphone-song.svg';
import TopItem from './topItem';

import './topSongsAndArtists.css';

const topArtists = (artists) => (
  <Fragment>
    <h2 className="top-songs-and-artists__header">Top Artists</h2>
    {artists.map((artist, index) => (
      <TopItem icon={songIcon} title={artist.name} subtitle={artist.genre} hasDivisor={index !== 4} />
    ))}
  </Fragment>
);

const topSongs = (songs) => (
  <Fragment>
    <h2 className="top-songs-and-artists__header">Top Songs</h2>
    {songs.map((song, index) => (
      <TopItem icon={songIcon} title={song.songName} subtitle={song.artist} hasDivisor={index !== 4} />
    ))}
  </Fragment>
);

const TopSongsAndArtists = ({ songs = [], artists = [] }) => (
  <div className="top-songs-and-artists">
    {topSongs(songs)}
    <div className="top-songs-and-artists__line" />
    {topArtists(artists)}
  </div>
);

export default TopSongsAndArtists;
