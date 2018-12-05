import React from 'react';

import Album from '../../albums/album/album';

import getClassName from '../../../utils/getClassName';

import './albumsGrid.css';

const getAlbumsComponents = (albums = [], size) =>
  albums.map((album) => <Album {...{ key: album.id, size, ...album }} />);

const AlbumsGrid = ({ albums, size, gridSize }) => (
  <div className={`albums-grid ${getClassName(gridSize)}`}>
    {getAlbumsComponents(albums, size)}
  </div>
);

export default AlbumsGrid;
