import React, { Component } from 'react';

import './settingsAll.css';
import SettingsItem from '../SettingsItem/settingsItem';
import { LINKS } from './constants';

class SettingsAll extends Component {
  state = {
    selectedLink: window.location.pathname
  };

  componentDidUpdate = (prevState) => {
    const currentLink = window.location.pathname;
    if (currentLink !== prevState.selectedLink) {
      this.setState({ selectedLink: currentLink });
    }
  };

  handlePageChange(selectedLink) {
    this.setState({ selectedLink });
  }

  _renderItems() {
    const onLinkClicked = (selectedLink) => this.handlePageChange(selectedLink);
    const { selectedLink } = this.state;

    return LINKS.map(({ src, name, alt, active, to }, index) => {
      const matchCase = new RegExp(`^${to}`);
      return (
        active && (
          <SettingsItem
            {...{
              key: index,
              src,
              name,
              alt,
              to,
              onLinkClicked,
              isSelected: !!selectedLink.match(matchCase)
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
