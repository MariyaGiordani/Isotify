import React, { Component } from 'react';

import './loadingBar.css';

class LoadingBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      percentage: 60
    };
  }

  render() {
    const { percentage } = this.state;
    return (
      <div className="loading__bar-outer">
        <div
          clasName="loading__bar-inner"
          style={{ width: `${percentage}%` }}
        />
      </div>
    );
  }
}

export default LoadingBar;
