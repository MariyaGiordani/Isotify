import React from 'react';
import ArtistCard from '../Card/artistCard';
import Grid from './grid';

const getArtists = (artists = [], size) =>
  artists.map((artist) => (
    <ArtistCard {...{ ...artist, size: 'big', key: artist.id }} />
  ));

const ArtistsGrid = ({ artists, size }) => (
  <Grid>{getArtists(artists, size)}</Grid>
);

export default ArtistsGrid;
