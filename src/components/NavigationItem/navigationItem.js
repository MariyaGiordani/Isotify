import React from 'react';
import classnames from 'classnames';

import './navigationItem.css';

const NavigationItem = ({ onClick, link }) => {
  const linkClass = classnames({
    navigation__item: true,
    active: link.active
  });

  return (
    <li
      key={link.to}
      className={`navigation__item ${linkClass}`}
      onClick={onClick.bind(this, link)}
    >
      <a href={`#${link.to}`}>{link.name}</a>
    </li>
  );
};

export default NavigationItem;
