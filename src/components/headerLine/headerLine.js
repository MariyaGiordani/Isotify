import React from 'react';
import './headerLine.css';

const HeaderLine = ({ title, subtitle, children, size }) => (
  <div className="header-line">
    <div className="header-line__texts">
      <h1 className={`header-line__title header-line__title--${size}`}>
        {title}
      </h1>
      <h2 className={`header-line__subtitle header-line__subtitle--${size}`}>
        {subtitle}
      </h2>
    </div>
    {children}
  </div>
);

export default HeaderLine;
