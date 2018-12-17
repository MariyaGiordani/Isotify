import React from 'react';
import './appearance.css';
import HeaderLine from '../headerLine/headerLine';
import Reset from '../../components/Reset/reset';

const title = 'Appearence';

const Appearence = () => {
  return (
    <div className="appearance">
      <HeaderLine title={title}>
        <Reset />
      </HeaderLine>
    </div>
  );
};

export default Appearence;
