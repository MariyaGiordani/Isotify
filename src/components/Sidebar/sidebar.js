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

  changeIsCollapsed = () => {
    const { isCollapsed } = this.state;
    this.setState({ isCollapsed: !isCollapsed });
  };

  _renderIcons() {
    const onLinkClicked = (selectedLink) => this.handlePageChange(selectedLink);
    const { selectedLink } = this.state;

    return LINKS.map(({ to, src, name, spacer, alt, active }, index) => {
      const matchCase = new RegExp(`^${to}`);
      return (
        active && (
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
        )
      );
    });
  }

  render() {
    const { isCollapsed } = this.state;
    return (
      <Fragment>
        <Hamburger hamburgerClick={this.changeIsCollapsed} />
        <div
          className={
            isCollapsed ? 'sidebar sidebar--collapsed' : 'sidebar sidebar--show'
          }
        >
          {this._renderIcons()}
        </div>
        <div
          onClick={this.changeIsCollapsed}
          className={
            isCollapsed
              ? 'sidebar__screen sidebar__screen--collapsed'
              : 'sidebar__screen'
          }
        />
      </Fragment>
    );
  }
}

export default SideBar;
