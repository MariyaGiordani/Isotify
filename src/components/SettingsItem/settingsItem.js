import React from 'react';
import './settingsItem.css';
import SelectedIcon from '../SelectedIcon/selectedIcon';

const SettingsItem = ({ src, name, alt, isSelected, onClicked }) => {
  return (
    <div className="settings-item" onClick={(item) => onClicked(item)}>
      <div className="settings-item__icon-space">
        <div className="settings-item__icon-ball">
          <img src={src} className="settings-item__icon" alt={alt} />
        </div>
      </div>
      <div className="settings-item__text">
        <p className="settings-item__title">{name}</p>
      </div>
      {isSelected && <SelectedIcon type={'settings'} />}
    </div>
  );
};

export default SettingsItem;
