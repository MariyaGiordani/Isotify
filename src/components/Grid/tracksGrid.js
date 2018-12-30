import React from 'react';

import TrackCard from '../Card/trackCard';

import Grid from './grid';

const getTracksComponents = (tracks = [], size) =>
  tracks.map((track) => <TrackCard {...{ key: track.id, size, ...track }} />);

const TracksGrid = ({ tracks, size }) => (
  <Grid>{getTracksComponents(tracks, size)}</Grid>
);

export default TracksGrid;
