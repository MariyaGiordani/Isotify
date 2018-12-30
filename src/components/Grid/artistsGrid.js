import React from 'react';
import ArtistCard from '../Card/artistCard';
import './artistsGrid.css';

const getArtists = (artists = [], size) =>
  artists.map((artist) => (
    <ArtistCard {...{ ...artist, size: 'big', key: artist.id }} />
  ));

const ArtistsGrid = ({ artists, size }) => (
  <div className="artists-grid artists-grid--centering">
    <div className="artists-grid">{getArtists(artists, size)}</div>
  </div>
);

export default ArtistsGrid;
