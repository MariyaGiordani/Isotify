import React from 'react';

import './header.css';

import triangleImg from '../../assets/img/triangle.png';
import playlisticonImg from '../../assets/img/playlisticon.png';
import mountainImg from '../../assets/img/mountain.png';
import Search from '../../components/Search/search';

const Header = (props) => (
  <div className="header">
    <div className="header__icon">
      {props.src && (
        <img
          className="header__icon-image"
          alt="User Profile"
          src={props.src}
        />
      )}
    </div>
    <div className="header__wrap">
      <p className="header__user-name">{props.name}</p>
      <a className="header__user-profile" href="#viewprofile">
        VIEW PROFILE
      </a>
    </div>
    <img className="header__image-triangle" alt="" src={triangleImg} />
    <div className="header__devider" />
    <Search />
    <img className="header__image-playlist" alt="" src={playlisticonImg} />
    <div className="header__devider" />
    <img className="header__image-mountain" alt="" src={mountainImg} />
  </div>
);

export default Header;
