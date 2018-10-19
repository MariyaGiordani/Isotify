import React from "react";
import "./switchButton.css";

const Switch = (props) => (
  <div className="switch-container">
    <p className="switch-container__option">{props.firstOption}</p>
    <label className="switch-button">
      <input type="checkbox" className="switch-button__input" />
      <span className="switch-button__handle" />
    </label>
    <p className="switch-container__option">{props.secondOption}</p>
  </div>
);
export default Switch;
