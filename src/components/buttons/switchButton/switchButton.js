import React from 'react';
import './switchButton.css';

const SwitchButton = (props) => (
  <div className="switch-container">
    <p className="switch-container__option">{props.firstOption}</p>
    <label className="switch-button">
      <input
        type="checkbox"
        className="switch-button__input"
        onChange={(event) => props.inputFunction(event.target.checked)}
      />
      <span className="switch-button__handle" />
    </label>
    <p className="switch-container__option">{props.secondOption}</p>
  </div>
);
export default SwitchButton;
