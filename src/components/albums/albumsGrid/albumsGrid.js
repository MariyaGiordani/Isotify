import React from 'react';
import Card from '../../Card/card';
import './albumsGrid.css';

const getAlbumsComponents = (albums = [], size) =>
  albums.map(({ imgSrc, title, artist, id, date }) => (
    <Card
      imgSrc={imgSrc}
      size={size}
      title={title}
      subtitle={artist.name}
      subtitleHref={`/artists/${artist.id}`}
      key={id}
      albumId={id}
      popup={true}
      date={date}
    />
  ));

const AlbumsGrid = ({ albums, size }) => (
  <div className="albums-grid">{getAlbumsComponents(albums, size)}</div>
);

export default AlbumsGrid;
