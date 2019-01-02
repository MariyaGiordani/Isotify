import React from 'react';

import Card from '../Card/card';
import { getClassName } from '../../utils/getClassName';

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
  const gridClass = getClassName('grid__elements', size);
  const content = children || getComponents(items, size);
  return (
    <div className={`grid size === 'small' && ${gridClass}`}>
      {size === 'small' ? content : <div className={gridClass}>{content}</div>}
    </div>
  );
};

export default Grid;
