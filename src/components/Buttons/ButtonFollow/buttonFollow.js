import React from "react";
import "./buttonFollow.css";
import follow from "../../../assets/img/follow.png";

const ButtonFollow = () => (
  <button className="button-follow ">
    <img className="button-follow__icon" alt="" src={follow} />
    Follow
  </button>
);

export default ButtonFollow;
