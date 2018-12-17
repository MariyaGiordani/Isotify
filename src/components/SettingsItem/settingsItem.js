import React from 'react';
import { Link } from 'react-router-dom';
import './settingsItem.css';
import SelectedIcon from '../SelectedIcon/selectedIcon';

const SettingsItem = ({ src, name, alt, isSelected, to, onLinkClicked }) => {
  return (
    <Link className="settings-item" to={to} onClick={() => onLinkClicked(to)}>
      <div className="settings-item__icon-space">
        <div className="settings-item__icon-ball">
          <img src={src} className="settings-item__icon" alt={alt} />
        </div>
      </div>
      <div className="settings-item__text">
        <p className="settings-item__title">{name}</p>
      </div>
      {isSelected && <SelectedIcon />}
    </Link>
  );
};

export default SettingsItem;
