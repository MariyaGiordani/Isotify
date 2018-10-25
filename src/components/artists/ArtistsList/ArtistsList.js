import React from 'react';
import ArtistLine from '../ArtistLine/ArtistLine';
import './ArtistsList.css';

const getArtistsComponents = (artists = []) =>
  artists.map((artist) => <ArtistLine artist={artist} />);

const ArtistsList = ({ artists }) => (
  <div className="artistList">{getArtistsComponents(artists)}</div>
);

export default ArtistsList;
