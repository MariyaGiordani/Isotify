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

const Grid = ({ items, size, children }) => (
  <div className="grid">
    <div
      className={`${
        size === 'quarter' ? 'grid grid--centering' : 'grid--quarter'
      }`}
    >
      {children || getComponents(items, size)}
    </div>
  </div>
);

export default Grid;
