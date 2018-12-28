import React, { Component } from 'react';
import './switchButton.css';

class SwitchButton extends Component {
  state = {
    isFirstOptionSelected: true,
    isButtonOnOff: false
  };

  switchButtonInput = (event) => {
    const isFirstOptionSelected = !this.state.isFirstOptionSelected;
    this.setState({ isFirstOptionSelected });
    const { inputFunction } = this.props;
    inputFunction(event.target.checked);
  };

  componentDidMount = () => {
    const { isButtonOnOff } = this.props;
    isButtonOnOff && this.setState({ isButtonOnOff });
  };

  render = () => {
    const { isFirstOptionSelected, isButtonOnOff } = this.state;

    const firstInputModifier =
      isFirstOptionSelected && 'switch-button__option-selected';
    const secondInputModifier =
      !isFirstOptionSelected && 'switch-button__option-selected';

    const labelModifier =
      isButtonOnOff &&
      isFirstOptionSelected &&
      'switch-button__input-container--inactive';

    const { firstOption, secondOption } = this.props;

    return (
      <div className="switch-button">
        <p className={`switch-button__option ${firstInputModifier}`}>
          {firstOption}
        </p>
        <label className={`switch-button__input-container ${labelModifier}`}>
          <input
            type="checkbox"
            className="switch-button__input"
            onChange={this.switchButtonInput}
          />
          <span className="switch-button__handle" />
        </label>
        <p className={`switch-button__option ${secondInputModifier}`}>
          {secondOption}
        </p>
      </div>
    );
  };
}

export default SwitchButton;
