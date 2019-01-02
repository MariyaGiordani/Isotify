import React from 'react';
import PlaylistCard from '../Card/playlistCard';
import Grid from './grid';

const getPlaylists = (playlists = [], size) =>
  playlists.map((playlist) => (
    <PlaylistCard {...{ ...playlist, size, key: playlist.id }} />
  ));

const PlaylistsGrid = ({ playlists, size }) => (
  <Grid {...{ size }}>{getPlaylists(playlists, size)}</Grid>
);

export default PlaylistsGrid;
