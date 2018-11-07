import React from 'react';
import { Link } from 'react-router-dom';
import className from 'classnames';

import './item.css';

const Item = (props) => {
  const linkClass = className({
    navigation__item: true,
    active: props.isActive
  });
  return (
    <Link className={linkClass} to={props.to} name={props.name}>
      {props.name}
    </Link>
  );
};

export default Item;
