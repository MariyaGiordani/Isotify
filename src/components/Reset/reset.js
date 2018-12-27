import React, { Component } from 'react';
import './reset.css';

class Reset extends Component {
  render = () => {
    const { onClick } = this.props;

    return (
      <button className="reset" onClick={onClick}>
        Reset all
      </button>
    );
  };
}

export default Reset;
