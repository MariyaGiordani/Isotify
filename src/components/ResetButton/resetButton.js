import React, { Component } from 'react';
import './reset.css';

class ResetButton extends Component {
  render = () => {
    const { onClick } = this.props;

    return (
      <button className="reset-button" onClick={onClick}>
        Reset all
      </button>
    );
  };
}

export default ResetButton;
