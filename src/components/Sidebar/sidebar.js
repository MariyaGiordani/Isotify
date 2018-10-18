import React, { Component } from 'react';
import "./sidebar.css";
import IconSidebar from "../IconSidebar/icon";
import { LINKS } from "./constants"

class SideBar extends Component {
  state = {selectedLink: window.location.pathname};

  handlePageChange (selectedLink) {
    this.setState({ selectedLink });
  }

  _renderIcons () {
    const onLinkClicked = (selectedLink) => this.handlePageChange(selectedLink);
    const { selectedLink } = this.state;

    return LINKS.map((link, index) => (
      <IconSidebar
        key={index}
        to={link.to} 
        src={link.src} 
        onLinkClicked={onLinkClicked} 
        isSelected={selectedLink === link.to}
        name={link.name}/>
    ))
  }

  render() {
    return (
      <div className="sidebar">
        { this._renderIcons() }
      </div>
    )
  }
};

export default SideBar;