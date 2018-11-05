import React from 'react';

import './header.css';

import triangleImg from '../../assets/img/triangle.png';
import playlisticonImg from '../../assets/img/playlisticon.png';
import mountainImg from '../../assets/img/mountain.png';
import Search from '../../components/Search/search';

const Header = () => (
  <div className="header">
    <div className="header__icon">
      <img className="header__icon-image" alt="" />
    </div>
    <div className="header__wrap">
      <p className="header-user__name">Darya Vermalen</p>
      <a className="header-user__profile" href="#viewprofile">
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
