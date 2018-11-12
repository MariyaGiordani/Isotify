import React, { Component } from 'react';
import NavigationItem from '../NavigationItem/navigationItem';

import './artistNavigationItems.css';
import { LINKS } from './constants';

class ArtistNavigationItems extends Component {
  state = {
    active: false,
    data: LINKS
  };

  someFunct = (link, event) => {
    event.preventDefault();

    const { data } = this.state;
    this.setState({
      data: data.map((item) => {
        item.active = item.to === link.to;
        return item;
      })
    });
  };

  render() {
    const { data } = this.state;
    return (
      <div className="navigation__items">
        <ul>
          {data.map((link) => {
            return (
              <NavigationItem
                link={link}
                key={link.to}
                onClick={this.someFunct}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ArtistNavigationItems;
