import React from 'react';

import Card from '../../components/Card/card';

import './grid.css';

const getComponents = (items = [], size) =>
  items.map(({ imgSrc, title, subtitle, key }) => (
    <Card
      {...{
        imgSrc,
        size,
        title,
        subtitle,
        key
      }}
    />
  ));

const Grid = ({ items, size }) => (
  <div className="grid">
    <div className="grid--centering">{getComponents(items, size)}</div>
  </div>
);

export default Grid;
