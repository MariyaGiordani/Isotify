import React, { Component } from 'react';

import './loadingBar.css';

export default class LoadingBar extends Component {
  render() {
    const { progress, type } = this.props;
    return (
      <div className={`loading-bar loading-bar--${type}`}>
        <div className="loading-bar__inner" style={{ width: `${progress}%` }} />
      </div>
    );
  }
}
