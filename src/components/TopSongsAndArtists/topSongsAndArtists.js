import React from 'react';
import songIcon from '../../assets/img/headphone-song.svg';
import TopItem from './topItem';
import { joinArrayOfStrings } from '../../utils/strings';
import { PlayerContext } from '../../components/Player/musicPlayer';

import './topSongsAndArtists.css';

const topArtists = (artists, playerCallBack) => (
  <div className="top-songs-and-artists__artists">
    <h2 className="top-songs-and-artists__header">Top Artists</h2>
    {artists.map((artist) => {
      const topSongs = artist.topSongs.map((song) => song.id);
      return (
        <TopItem
          key={artist.id}
          icon={songIcon}
          title={artist.name}
          subtitle={joinArrayOfStrings(artist.genres)}
          ids={topSongs}
          clickCallBack={playerCallBack}
        />
      );
    })}
  </div>
);

const topSongs = (songs, playerCallBack) => (
  <div className="top-songs-and-artists__songs">
    <h2 className="top-songs-and-artists__header">Top Songs</h2>
    {songs.map((song) => (
      <TopItem
        key={song.id}
        icon={songIcon}
        title={song.songName}
        subtitle={song.artist.name}
        ids={[song.id]}
        clickCallBack={playerCallBack}
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
    <PlayerContext>
      {(context) => {
        const songCallBack = (id) => context.onClickPlayTrack(id);
        return (
          <div className="top-songs-and-artists">
            {topSongs(topSongsItems, songCallBack)}
            <div className="top-songs-and-artists__line" />
            {topArtists(topArtistsItems, songCallBack)}
          </div>
        );
      }}
    </PlayerContext>
  );
};

export default TopSongsAndArtists;
