import React, { Component } from 'react';

import './settingsAll.css';
import SettingsItem from '../SettingsItem/settingsItem';
import { LINKS } from './constants';

class SettingsAll extends Component {
  _renderItems() {
    return LINKS.map(({ to, src, name, alt, active }, index) => {
      return (
        active && (
          <SettingsItem
            {...{
              key: index,
              to,
              src,
              name,
              alt
            }}
          />
        )
      );
    });
  }

  render() {
    return (
      <div className="settings-all">
        <div className="settings-all__header"> All Settings </div>
        {this._renderItems()}
      </div>
    );
  }
}

export default SettingsAll;
