import React from 'react';
import "./sidebar.css";
import IconSidebar from "../IconSidebar/icon";
import headphoneImage from "../../assets/img/headphone.png";
import musicImage from "../../assets/img/music.png";

const SideBar = (prop) => (
  <div className="main-sidebar">
    <IconSidebar to={`/albums`} src={musicImage}/>
    <IconSidebar to={`/artists/1`} src={headphoneImage}/>
  </div>
);

export default SideBar;