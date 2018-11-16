import React, { Component } from 'react';
import './switchButton.css';

class SwitchButton extends Component {
  state = {
    isFirstOptionSelected: true
  };

  switchButtonInput = (event) => {
    const isFirstOptionSelected = !this.state.isFirstOptionSelected;
    this.setState({ isFirstOptionSelected });
    this.props.inputFunction(event.target.checked);
  };

  render = () => {
    const firstInputModifier = this.state.isFirstOptionSelected ? 'switch-button__option-selected' : '';
    const secondInputModifier = !this.state.isFirstOptionSelected ? 'switch-button__option-selected' : '';
    return (
      <div className="switch-button">
        <p className={`switch-button__option ${firstInputModifier}`}>{this.props.firstOption}</p>
        <label className="switch-button__input-container">
          <input type="checkbox" className="switch-button__input" onChange={this.switchButtonInput} />
          <span className="switch-button__handle" />
        </label>
        <p className={`switch-button__option ${secondInputModifier}`}>{this.props.secondOption}</p>
      </div>
    );
  };
}

export default SwitchButton;
