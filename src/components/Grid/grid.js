import React from 'react';

import Card from '../Card/card';

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

const Grid = ({ items, size, children }) => {
  const gridClass =
    size === 'quarter' ? 'grid__elements-quarter' : 'grid__elements';
  return (
    <div className="grid">
      <div className={gridClass}>{children || getComponents(items, size)}</div>
    </div>
  );
};

export default Grid;
