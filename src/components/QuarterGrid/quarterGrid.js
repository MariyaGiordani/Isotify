import React, { Fragment } from 'react';
import './quarterGrid.css';
import ButtonSeeAll from '../ButtonSeeAll/buttonSeeAll';
import AlbumsGrid from '../../components/albums/albumsGrid/albumsGrid';
import HeaderLine from '../headerLine/headerLine';

const QuarterGrid = (props) => {
  return (
    <Fragment>
      <HeaderLine title={title} subtitle={subtitle}>
        <ButtonSeeAll />
      </HeaderLine>
      <AlbumsGrid albums={props.albums} size="quarter" />
    </Fragment>
  );
};

export default QuarterGrid;
