import React, { Component } from 'react';
import './checkBox.css';

class CheckBox extends Component {
  state = {
    isButtonOnOff: false
  };

  checkBoxInput = (event) => {
    const isButtonOnOff = !this.state.isButtonOnOff;
    this.setState({ isButtonOnOff });
    const { inputFunction } = this.props;
    inputFunction(event.target.checked);
  };

  render = () => {
    return (
      <label className={'check-box'}>
        <input type="checkbox" onChange={this.checkBoxInput} />
        <span className="check-box__checkmark" />
      </label>
    );
  };
}

export default CheckBox;
