import React from 'react';
import songIcon from '../../assets/img/headphone-song.svg';
import TopItem from './topItem';
import { joinArrayOfStrings } from '../../utils/strings';

import './topSongsAndArtists.css';

const topArtists = (artists) => (
  <div className="top-songs-and-artists__artists">
    <h2 className="top-songs-and-artists__header">Top Artists</h2>
    {artists.map((artist) => (
      <TopItem
        key={artist.id}
        icon={songIcon}
        title={artist.name}
        subtitle={joinArrayOfStrings(artist.genres)}
      />
    ))}
  </div>
);

const topSongs = (songs) => (
  <div className="top-songs-and-artists__songs">
    <h2 className="top-songs-and-artists__header">Top Songs</h2>
    {songs.map((song) => (
      <TopItem
        key={song.id}
        icon={songIcon}
        title={song.songName}
        subtitle={song.artist.name}
      />
    ))}
  </div>
);

const TopSongsAndArtists = ({
  songs = [],
  artists = [],
  maxArtists = 5,
  maxSongs = 5
}) => {
  const topSongsItems = songs.slice(0, maxSongs);
  const topArtistsItems = artists.slice(0, maxArtists);
  return (
    <div className="top-songs-and-artists">
      {topSongs(topSongsItems, maxSongs)}
      <div className="top-songs-and-artists__line" />
      {topArtists(topArtistsItems, maxArtists)}
    </div>
  );
};

export default TopSongsAndArtists;
