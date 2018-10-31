import React from 'react';

import './header.css';

const Header = () => (
  <div className="header">
    <div className="header-icon--size">
      <img className="header-icon__image" alt="" />
    </div>
    <div className="header__wrap">
      <p className="header-user__name">Darya Vermalen</p>
      <p className="header-user__text">VIEW PROFILE</p>
    </div>
  </div>
);

export default Header;
