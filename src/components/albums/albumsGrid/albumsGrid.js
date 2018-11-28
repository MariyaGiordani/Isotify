import React from 'react';
import Card from '../../Card/card';
import './albumsGrid.css';

const getAlbumsComponents = (albums = [], size) =>
  albums.map(({ imgSrc, title, artist, id }) => (
    <Card
      imgSrc={imgSrc}
      size={size}
      title={title}
      subtitle={artist.name}
      subtitleHref={`/artists/${artist.id}`}
      key={id}
    />
  ));

const getClassName = (modifier) => (modifier ? `albums-grid--${modifier}` : '');

const AlbumsGrid = ({ albums, size, gridSize }) => (
  <div className={`albums-grid ${getClassName(gridSize)}`}>
    {getAlbumsComponents(albums, size)}
  </div>
);

export default AlbumsGrid;
