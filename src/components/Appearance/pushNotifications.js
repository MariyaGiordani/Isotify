import React, { Component } from 'react';
import './appearance.css';
import HeaderLine from '../headerLine/headerLine';
import SwitchButton from '../../components/SwitchButton/switchButton';

export default class PushNotifications extends Component {
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
    const { subtitle, isDisabled } = this.state;

    return (
      <HeaderLine
        {...{
          title: 'Push Notifications',
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
