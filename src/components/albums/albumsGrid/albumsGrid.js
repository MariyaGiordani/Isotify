import React from 'react';
import Card from '../../Card/card';
import './albumsGrid.css';

const artistLink = (artist) => ({ text: artist.name, link: `/artists/${artist.id}` });
const albumYearToArtistLink = (album) => ({
  text: album.date.slice[0 - 4],
  link: `/artists/${album.artist.id}`
});

const getAlbumsComponents = (albums = [], size) =>
  albums.map(({ imgSrc, title, artist, id }) => (
    <Card imgSrc={imgSrc} size={size} title={{ text: title }} subtitle={artistLink(artist)} key={id} />
  ));

const AlbumsGrid = ({ albums, size }) => (
  <div className="albums-grid">{getAlbumsComponents(albums, size)}</div>
);

export default AlbumsGrid;
