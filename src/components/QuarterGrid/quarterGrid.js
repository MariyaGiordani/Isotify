import React from 'react';

import HeaderLine from '../headerLine/headerLine';

import './quarterGrid.css';

const QuarterGrid = ({ title, subtitle, children }) => {
  return (
    <div className="quarter-grid">
      <HeaderLine title={title} subtitle={subtitle} />
      {children}
    </div>
  );
};

export default QuarterGrid;
