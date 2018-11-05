import React, { Component, Fragment } from 'react';

import SidebarIcon from '../SidebarIcon/sidebarIcon';
import Hamburger from '../../components/Hamburger/hamburger';

import './sidebar.css';
import { LINKS } from './constants';

class SideBar extends Component {
  state = {
    selectedLink: window.location.pathname,
    isCollapsed: true
  };

  handlePageChange(selectedLink) {
    this.setState({ selectedLink });
  }

  changeisCollapsed = () =>
    this.setState({ isCollapsed: !this.state.isCollapsed });

  _renderIcons() {
    const onLinkClicked = (selectedLink) => this.handlePageChange(selectedLink);
    const { selectedLink } = this.state;

    return LINKS.map((link) => (
      <SidebarIcon
        key={link.position}
        position={link.position}
        to={link.to}
        src={link.src}
        onLinkClicked={onLinkClicked}
        isSelected={selectedLink === link.to}
        name={link.name}
      />
    ));
  }

  render() {
    return (
      <Fragment>
        <Hamburger haburgerClick={this.changeisCollapsed} />
        <div
          className={
            this.state.isCollapsed
              ? 'sidebar sidebar--collapsed'
              : 'sidebar sidebar--show'
          }
        >
          <div className="sidebar">{this._renderIcons()}</div>
        </div>
      </Fragment>
    );
  }
}

export default SideBar;
