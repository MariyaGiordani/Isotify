import React, { Component } from 'react';
import './checkBox.css';

class CheckBox extends Component {
  render = () => {
    const { onChange, isChecked } = this.props;
    return (
      <label className="check-box">
        <input type="checkbox" onChange={onChange} checked={isChecked} />
        <span className="check-box__checkmark" />
      </label>
    );
  };
}

export default CheckBox;
