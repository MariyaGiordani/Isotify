import React from 'react';
import './selectedIcon.css';

const SelectedIcon = ({ type }) => (
  <div className={`selected-icon selected-icon__${type}`} />
);

export default SelectedIcon;
