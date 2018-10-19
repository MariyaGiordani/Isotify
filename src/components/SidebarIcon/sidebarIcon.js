import React from "react";
import "./sidebarIcon.css";
import { Link } from "react-router-dom";
import SelectedIcon from "../SelectedIcon/selectedIcon";

const SidebarIcon = (props) => (
  <Link className="sidebar-icon" to={props.to} onClick={() => props.onLinkClicked(props.to)}>
    <div className="sidebar-icon__image-wrapper">
      <img className="sidebar-icon__image" alt="" src={props.src} />
      {props.isSelected && <SelectedIcon />}
    </div>
    <p className="sidebar-icon__title">{props.name}</p>
  </Link>
);

export default SidebarIcon;
