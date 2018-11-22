import React from 'react';
import songIcon from '../../assets/img/headphone-song.svg';
import TopItem from './topItem';

import './topSongsAndArtists.css';

const topArtists = (artists) => (
  <div>
    <h2 className="top-songs-and-artists__header">Top Artists</h2>
    {artists.map((artist, index) => (
      <TopItem icon={songIcon} title={artist.name} subtitle={artist.genre} hasDivisor={index !== 4} />
    ))}
  </div>
);

const topSongs = (songs) => (
  <div>
    <h2 className="top-songs-and-artists__header">Top Songs</h2>
    {songs.map((song, index) => (
      <TopItem icon={songIcon} title={song.songName} subtitle={song.artist} hasDivisor={index !== 4} />
    ))}
  </div>
);

const TopSongsAndArtists = ({ songs, artists }) => (
  <div className="top-songs-and-artists">
    {topSongs(songs)}
    <div className="top-songs-and-artists__line" />
    {topArtists(artists)}
  </div>
);

export default TopSongsAndArtists;
