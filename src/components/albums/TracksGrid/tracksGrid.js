import React from 'react';
import Card from '../../Card/card';
import './tracksGrid.css';

const getSongsComponents = (tracks = [], size) =>
  tracks.map(({ albumImage, songName, artist, id }) => (
    <Card
      imgSrc={albumImage}
      size={size}
      title={songName}
      subtitle={artist.name}
      key={id}
    />
  ));

const getClassName = (modifier) => (modifier ? `tracks-grid--${modifier}` : '');

const TracksGrid = ({ tracks, size, gridSize }) => (
  <div className={`tracks-grid ${getClassName(gridSize)}`}>
    {getSongsComponents(tracks, size)}
  </div>
);

export default TracksGrid;
