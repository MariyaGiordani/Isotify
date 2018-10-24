import React from 'react';
import './switchButton.css';

const SwitchButton = (props) => (
  <div className="switch-button">
    <p className="switch-button__option">{props.firstOption}</p>
    <label className="switch-button__input-container">
      <input
        type="checkbox"
        className="switch-button__input"
        onChange={(event) => props.inputFunction(event.target.checked)}
      />
      <span className="switch-button__handle" />
    </label>
    <p className="switch-button__option">{props.secondOption}</p>
  </div>
);
export default SwitchButton;
