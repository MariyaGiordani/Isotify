import React from 'react';
import './settingsItem.css';

const SettingsItem = ({ src, name, alt }) => (
  <div className="settings-item">
    <div className="settings-item__icon-space">
      <div className="settings-item__icon-ball">
        <img src={src} className="settings-item__icon" alt={alt} />
      </div>
    </div>
    <div className="settings-item__text">
      <p className="settings-item__title">{name}</p>
    </div>
  </div>
);

export default SettingsItem;
