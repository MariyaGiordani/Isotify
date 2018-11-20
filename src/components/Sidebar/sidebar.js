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

  componentDidUpdate = (prevProps, prevState) => {
    const currentLink = window.location.pathname;
    if (currentLink !== prevState.selectedLink) {
      this.setState({ selectedLink: currentLink });
    }
  };

  handlePageChange(selectedLink) {
    this.setState({ selectedLink });
  }

  changeIsCollapsed = () =>
    this.setState({ isCollapsed: !this.state.isCollapsed });

  _renderIcons() {
    const onLinkClicked = (selectedLink) => this.handlePageChange(selectedLink);
    const { selectedLink } = this.state;

    return LINKS.map(({ to, src, name, spacer, alt, active }, index) => {
      const matchCase = new RegExp(`^${to}`);
      return (
        <SidebarIcon
          {...{
            key: index,
            to,
            src,
            onLinkClicked,
            name,
            spacer,
            alt,
            isSelected: !!selectedLink.match(matchCase)
          }}
        />
      );
    });
  }

  render() {
    return (
      <Fragment>
        <Hamburger hamburgerClick={this.changeIsCollapsed} />
        <div
          className={
            this.state.isCollapsed
              ? 'sidebar sidebar--collapsed'
              : 'sidebar sidebar--show'
          }
        >
          {this._renderIcons()}
        </div>
        <div
          onClick={this.changeIsCollapsed}
          className={
            this.state.isCollapsed
              ? 'sidebar__screen sidebar__screen--collapsed'
              : 'sidebar__screen test--show'
          }
        />
      </Fragment>
    );
  }
}

export default SideBar;
