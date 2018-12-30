import React from 'react';

import AlbumCard from '../Card/albumCard';

import getClassName from '../../utils/getClassName';

import './albumsGrid.css';

const getAlbumsComponents = (albums = [], size) =>
  albums.map((album) => <AlbumCard {...{ key: album.id, size, ...album }} />);

const AlbumsGrid = ({ albums, size, gridSize }) => (
  <div className={`albums-grid ${getClassName('albums-grid', gridSize)}`}>
    {getAlbumsComponents(albums, size)}
  </div>
);

export default AlbumsGrid;
