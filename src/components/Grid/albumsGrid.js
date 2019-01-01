import React from 'react';

import AlbumCard from '../Card/albumCard';

import Grid from './grid';

const getAlbumsComponents = (albums = [], size) =>
  albums.map((album) => <AlbumCard {...{ key: album.id, size, ...album }} />);

const AlbumsGrid = ({ albums, size, gridSize }) => (
  <Grid>{getAlbumsComponents(albums, size)}</Grid>
);

export default AlbumsGrid;
