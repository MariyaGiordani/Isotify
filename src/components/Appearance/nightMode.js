import React, { Component } from 'react';

import HeaderLine from '../headerLine/headerLine';

import SwitchButton from '../../components/SwitchButton/switchButton';

import './appearance.css';

export default class NightMode extends Component {
  state = {
    subtitle: '',
    isDisabled: false
  };

  changeViewMode = () => {
    const { isDisabled } = this.state;
    isDisabled
      ? this.setState({ isDisabled: false, subtitle: 'ENABLED' })
      : this.setState({ isDisabled: true, subtitle: 'DISABLED' });
  };

  componentDidMount = () => {
    this.changeViewMode();
  };

  render = () => {
    const { subtitle } = this.state;

    return (
      <HeaderLine
        {...{
          title: 'Night mode',
          subtitle: subtitle,
          size: 'small'
        }}
      >
        <SwitchButton
          inputFunction={this.changeViewMode}
          isButtonOnOff={true}
        />
      </HeaderLine>
    );
  };
}
