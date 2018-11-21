import React from 'react';
import Album from '../../albums/album/album';
import './albumsGrid.css';

const getAlbumsComponents = (albums = [], size) =>
  albums.map(({ imgSrc, title, artist, id, date }) => (
    <Album imgSrc={imgSrc} size={size} title={title} artist={artist} key={id} albumId={id} date={date} />
  ));

const AlbumsGrid = ({ albums, size }) => (
  <div className="albums-grid">{getAlbumsComponents(albums, size)}</div>
);

export default AlbumsGrid;
