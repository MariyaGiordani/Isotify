import React from 'react';
import Card from '../../Card/card';
import './albumsGrid.css';

const getAlbumsComponents = (albums = [], size) =>
  albums.map(({ imgSrc, title, artist, id }) => (
    <Card
      imgSrc={imgSrc}
      size={size}
      title={{ text: title }}
      subtitle={{ text: artist.name, link: `/artists/${artist.id}` }}
      key={id}
    />
  ));

const AlbumsGrid = ({ albums, size }) => (
  <div className="albums-grid">{getAlbumsComponents(albums, size)}</div>
);

export default AlbumsGrid;
