import React from 'react';
import './buttonFollow.css';
import followImg from '../../assets/img/follow-plus.png';

const ButtonFollow = () => (
  <button className="button-follow">
    <img
      className="button-follow__icon"
      alt="symbol representing follow artist"
      src={followImg}
    />
    Follow
  </button>
);

export default ButtonFollow;
