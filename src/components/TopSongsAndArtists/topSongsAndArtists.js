import React from 'react';
import songIcon from '../../assets/img/headphone-song.svg';
import TopItem from './topItem';
import { joinArrayOfStrings } from '../../utils/strings';
import { PlayerContext } from '../../components/Player/musicPlayer';

import './topSongsAndArtists.css';

const topArtists = (artists, clickCallBack) => (
  <div className="top-songs-and-artists__artists">
    <h2 className="top-songs-and-artists__header">Top Artists</h2>
    {artists.map(({ id, name: title, genres }) => {
      const subtitle = joinArrayOfStrings(genres);
      return (
        <TopItem
          {...{
            title,
            subtitle,
            clickCallBack,
            key: id,
            ids: id,
            icon: songIcon
          }}
        />
      );
    })}
  </div>
);

const topSongs = (songs, clickCallBack) => (
  <div className="top-songs-and-artists__songs">
    <h2 className="top-songs-and-artists__header">Top Songs</h2>
    {songs.map(({ id, songName: title, artist: { name: subtitle } }) => (
      <TopItem
        {...{
          title,
          subtitle,
          clickCallBack,
          key: id,
          ids: [id],
          icon: songIcon
        }}
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
        const playSongCallBack = (id) => context.onClickPlayTrack(id);
        const playArtistCallBack = (id) => context.onClickPlayArtist(id);
        return (
          <div className="top-songs-and-artists">
            {topSongs(topSongsItems, playSongCallBack)}
            <div className="top-songs-and-artists__line" />
            {topArtists(topArtistsItems, playArtistCallBack)}
          </div>
        );
      }}
    </PlayerContext>
  );
};

export default TopSongsAndArtists;
