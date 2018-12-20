import React from 'react';
import Card from '../../Card/card';
import './artistsGrid.css';

const getArtists = (artists = [], size) =>
  artists.map(({ imgSrc, name, id, albums, totalTracks }) => (
    <Card
      imgSrc={imgSrc}
      size={size}
      title={name}
      subtitle={`${albums.length} Albums, ${totalTracks} Songs`}
      titleHref={`/artists/${id}`}
      key={id}
    />
  ));

const ArtistsGrid = ({ artists, size }) => (
  <div className="artists-grid artists-grid--centering">
    <div className="artists-grid">{getArtists(artists, size)}</div>
  </div>
);

export default ArtistsGrid;
