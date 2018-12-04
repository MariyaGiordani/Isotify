import React from 'react';
import Album from '../../albums/album/album';
import './albumsGrid.css';

const getAlbumsComponents = (albums = [], size) =>
  albums.map((album) => <Album {...album} size={size} />);

const getClassName = (modifier) => (modifier ? `albums-grid--${modifier}` : '');

const AlbumsGrid = ({ albums, size, gridSize }) => (
  <div className={`albums-grid ${getClassName(gridSize)}`}>
    {getAlbumsComponents(albums, size)}
  </div>
);

export default AlbumsGrid;
