import React, { Component } from 'react';

import Item from '../NavigationItem/item';

import './artistNavigationItems.css';
import { LINKS } from './constants';

class ArtistNavigationItems extends Component {
  state = { activeLink: window.location.pathname };

  handlePageChange(activeLink) {
    console.log(activeLink);
    this.setState({ activeLink });
  }

  _renderItems() {
    const onLinkClicked = (activeLink) => this.handlePageChange(activeLink);
    const { activeLink } = this.state;

    return LINKS.map((link, index) => {
      const matchCase = new RegExp(`^${link.to}`);
      console.log(link.to, activeLink);
      return (
        <Item
          key={index}
          to={link.to}
          onClick={onLinkClicked}
          isActive={!!activeLink.match(matchCase)}
          name={link.name}
        />
      );
    });
  }

  render() {
    return <div className="navigation__items">{this._renderItems()}</div>;
  }
}

export default ArtistNavigationItems;
