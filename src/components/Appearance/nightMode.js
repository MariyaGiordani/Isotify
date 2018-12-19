import React, { Component } from 'react';
import './appearance.css';
import HeaderLine from '../headerLine/headerLine';
import SwitchButton from '../../components/SwitchButton/switchButton';

export default class NightMode extends Component {
  state = {
    subtitle: '',
    isButtonOnOff: true
  };

  changeViewMode = () => {
    const { isButtonOnOff } = this.state;
    isButtonOnOff
      ? this.setState({ isButtonOnOff: false, subtitle: 'ENABLED' })
      : this.setState({ isButtonOnOff: true, subtitle: 'DISABLED' });
  };

  componentDidMount = () => {
    const { isButtonOnOff } = this.state;
    !isButtonOnOff
      ? this.setState({ subtitle: 'ENABLED' })
      : this.setState({ subtitle: 'DISABLED' });
  };

  render = () => {
    const { subtitle, isButtonOnOff } = this.state;

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
          isButtonOnOff={isButtonOnOff}
        />
      </HeaderLine>
    );
  };
}
