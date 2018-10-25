import React from 'react';
import Album from '../album/album';
import './albumsGrid.css';

const getAlbumsComponents = (albums = [], size) =>
  albums.map((album) => (
    <Album
      title={album.title}
      author={album.author}
      size={size}
      imgSrc={album.imgSrc}
    />
  ));

const AlbumsGrid = ({ albums, size }) => (
  <div className="albums-grid">{getAlbumsComponents(albums, size)}</div>
);

export default AlbumsGrid;