import React from 'react';

import Card from '../../components/Card/card';

import getClassName from '../../utils/getClassName';

import './playlistGrid.css';

const getPlaylistComponents = (playlists = [], size) =>
  playlists.map(({ imagePlaylist, namePlaylist, followersPlaylist, id }) => (
    <Card
      imgSrc={imagePlaylist}
      size={size}
      title={namePlaylist}
      subtitle={`${followersPlaylist} followers`}
      key={id}
    />
  ));

const PlaylistGrid = ({ playlists, size, gridSize }) => (
  <div className={`playlist-grid ${getClassName(gridSize)}`}>
    {getPlaylistComponents(playlists, size)}
  </div>
);

export default PlaylistGrid;
