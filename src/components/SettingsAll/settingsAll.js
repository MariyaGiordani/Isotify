import React, { Component, Fragment } from 'react';

import './settingsAll.css';
import SettingsItem from '../SettingsItem/settingsItem';
import Appearance from '../../components/Appearance/appearance';
import { LINKS } from './constants';

class SettingsAll extends Component {
  state = {
    selectedItem: ''
  };

  handleItemChange(selectedItem) {
    this.setState({ selectedItem });
  }

  _renderItems() {
    const { selectedItem } = this.state;
    return LINKS.map(({ src, name, alt, active }, index) => {
      const onClicked = () => this.handleItemChange(name);
      return (
        active && (
          <SettingsItem
            {...{
              key: index,
              src,
              name,
              alt,
              onClicked,
              isSelected: selectedItem === name
            }}
          />
        )
      );
    });
  }

  getCurrentItem(selectedItem) {
    const items = {
      Appearance: <Appearance />
    };
    return items[selectedItem];
  }

  render() {
    const { selectedItem } = this.state;
    return (
      <Fragment>
        <div className="settings">
          <div className="settings-all">
            <div className="settings-all__header"> All Settings </div>
            {this._renderItems()}
          </div>
          {this.getCurrentItem(selectedItem)}
        </div>
      </Fragment>
    );
  }
}

export default SettingsAll;
