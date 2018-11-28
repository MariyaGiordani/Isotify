import React, { Component } from 'react';

import './loadingBar.css';

export default class LoadingBar extends Component {
  render() {
    return (
      <div className="loading-bar">
        <div
          className="loading-bar__inner"
          style={{ width: `${this.props.progress}%` }}
        />
      </div>
    );
  }
}
