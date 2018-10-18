import React from "react";
import "./switch.css";

const Switch = (props) => (
  <div className="switch-container">
    <p className="switch-container__option">{props.firstOption}</p>
    <label className="switch">
      <input type="checkbox" className="switch__input" />
      <span className="switch__handle" />
    </label>
    <p className="container__option">{props.secondOption}</p>
  </div>
);
export default Switch;
