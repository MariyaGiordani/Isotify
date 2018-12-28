import React from 'react';

import classnames from 'classnames';

import SelectedIcon from '../SelectedIcon/selectedIcon';

import './settingsItem.css';

const SettingsItem = ({ src, name, alt, isSelected, onClicked }) => {
  const linkClass = classnames({
    'settings-item': true,
    'settings-item--color': isSelected
  });

  return (
    <div className={linkClass} onClick={onClicked}>
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
