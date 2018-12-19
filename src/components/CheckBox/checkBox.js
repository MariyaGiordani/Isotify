import React, { Component } from 'react';
import './checkBox.css';

class CheckBox extends Component {
  state = {
    isFirstOptionSelected: true
  };

  switchButtonInput = (event) => {
    const isFirstOptionSelected = !this.state.isFirstOptionSelected;
    this.setState({ isFirstOptionSelected });
    this.props.inputFunction(event.target.checked);
  };

  render = () => {
    const { isFirstOptionSelected } = this.state;

    const firstInputModifier = isFirstOptionSelected
      ? 'switch-button__option-selected'
      : '';
    const secondInputModifier = !isFirstOptionSelected
      ? 'switch-button__option-selected'
      : '';

    const { firstOption, secondOption } = this.props;
    return (
      <div className="switch-button">
        <p className={`switch-button__option ${firstInputModifier}`}>
          {firstOption}
        </p>
        <label className={'check-box'}>
          <input type="checkbox" />
          <span className="check-box__checkmark" />
        </label>
        <p className={`switch-button__option ${secondInputModifier}`}>
          {secondOption}
        </p>
      </div>
    );
  };
}

export default CheckBox;
