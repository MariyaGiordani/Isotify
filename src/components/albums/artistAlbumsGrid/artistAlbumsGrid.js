import React from 'react';
import Card from '../../Card/card';
import './artistAlbumsGrid.css';

const getAlbumsComponents = (albums = [], size) =>
  albums.map(({ imgSrc, title, date, id }) => (
    <Card
      imgSrc={imgSrc}
      size={size}
      title={title}
      titleHref={`/artists/${id}`}
      subtitle={date.slice(0, 4)}
      key={id}
    />
  ));

const ArtistAlbumsGrid = ({ albums, size }) => (
  <div className="artist-albums-grid">{getAlbumsComponents(albums, size)}</div>
);

export default ArtistAlbumsGrid;
