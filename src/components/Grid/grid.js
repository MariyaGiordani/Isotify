import React from 'react';

import Card from '../../components/Card/card';
import Track from '../../components/Track/track';
import './grid.css';

const getComponents = (items = [], size, type) =>
  type !== 'tracks'
    ? items.map(({ imgSrc, title, subtitle, key }) => (
        <Card
          {...{
            imgSrc,
            size,
            title,
            subtitle,
            key
          }}
        />
      ))
    : items.map((track) => <Track {...track} size={size} key={track.id} />);

const Grid = ({ items, size, type }) => (
  <div className="grid__centering">
    <div className="grid">{getComponents(items, size, type)}</div>
  </div>
);

export default Grid;
