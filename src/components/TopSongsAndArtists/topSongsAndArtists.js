import React, { Fragment } from 'react';
import songIcon from '../../assets/img/headphone-song.svg';
import TopItem from './topItem';

import './topSongsAndArtists.css';

const artistsGenresToString = (genres) => {
  const slicedGenres = genres.slice(0, 2).join(', ');
  return genres.length > 2 ? `${slicedGenres} ...` : slicedGenres;
};

const topArtists = (artists, maxArtists) => (
  <Fragment>
    <h2 className="top-songs-and-artists__header">Top Artists</h2>
    {artists.map((artist, index) => (
      <TopItem
        key={artist.id}
        icon={songIcon}
        title={artist.name}
        subtitle={artistsGenresToString(artist.genres)}
        hasDivisor={index !== maxArtists - 1}
      />
    ))}
  </Fragment>
);

const topSongs = (songs, maxSongs) => (
  <Fragment>
    <h2 className="top-songs-and-artists__header">Top Songs</h2>
    {songs.map((song, index) => (
      <TopItem
        key={song.songId}
        icon={songIcon}
        title={song.songName}
        subtitle={song.artist.name}
        hasDivisor={index !== maxSongs - 1}
      />
    ))}
  </Fragment>
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
