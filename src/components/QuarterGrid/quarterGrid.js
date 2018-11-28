import React from 'react';

import AlbumsGrid from '../../components/albums/albumsGrid/albumsGrid';
import HeaderLine from '../headerLine/headerLine';

import './quarterGrid.css';

const QuarterGrid = (props) => {
  return (
    <div className="quarter-grid">
      <HeaderLine title={props.title} subtitle={props.subtitle} />
      <AlbumsGrid albums={props.albums} size="quarter" />
    </div>
  );
};

export default QuarterGrid;
