import React, { Component } from 'react';

import SidebarIcon from '../SidebarIcon/sidebarIcon';

import './sidebar.css';
import { LINKS } from './constants';

class SideBar extends Component {
  state = { selectedLink: window.location.pathname };

  handlePageChange(selectedLink) {
    this.setState({ selectedLink });
  }

  _renderIcons() {
    const onLinkClicked = (selectedLink) => this.handlePageChange(selectedLink);
    const { selectedLink } = this.state;

    return LINKS.map((link, index) => (
      <SidebarIcon
        key={index}
        to={link.to}
        src={link.src}
        onLinkClicked={onLinkClicked}
        isSelected={selectedLink === link.to}
        name={link.name}
      />
    ));
  }

  render() {
    return <div className="sidebar">{this._renderIcons()}</div>;
  }
}

export default SideBar;
