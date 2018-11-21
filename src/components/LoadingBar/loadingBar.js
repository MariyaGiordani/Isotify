import React, { Component } from 'react';

import './loadingBar.css';

export default class LoadingBar extends Component {
  render() {
    return (
      <div className="loading__bar-outer">
        <div
          className="loading__bar-inner"
          style={{ width: `${this.props.progress}%` }}
        />
      </div>
    );
  }
}
