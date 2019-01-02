import React from 'react';
import './hamburger.css';

const Hamburger = ({ hamburgerClick }) => (
  <button className="hamburger-menu" onClick={hamburgerClick}>
    <svg width="30" height="30">
      <path d="M0,5 30,5" stroke="var(--theme-hamburger)" strokeWidth="4" />
      <path d="M0,14 30,14" stroke="var(--theme-hamburger)" strokeWidth="4" />
      <path d="M0,23 30,23" stroke="var(--theme-hamburger)" strokeWidth="4" />
    </svg>
  </button>
);

export default Hamburger;
