import React, { Component } from 'react';
import './appearance.css';
import HeaderLine from '../headerLine/headerLine';
import Reset from '../../components/Reset/reset';
import PushNotifications from './pushNotifications';
import NightMode from './pushNotifications';
import CheckBox from '../../components/CheckBox/checkBox';

export default class Appearence extends Component {
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
      <div className="appearance">
        <HeaderLine size="big" title={'Appearence'}>
          <Reset />
        </HeaderLine>
        <HeaderLine title={'Interface theme'} subtitle={'LIGHT'} size="small" />
        <div className="appearance__divider" />
        <PushNotifications />
        <div className="appearance__divider" />
        <NightMode />
        <div className="appearance__divider" />
        <HeaderLine title={'Main fonts'} size="small">
          <CheckBox />
        </HeaderLine>
        <div className="appearance__divider" />
        <HeaderLine
          {...{
            title: 'New album notification',
            subtitle: subtitle,
            size: 'small'
          }}
        >
          <CheckBox
            inputFunction={this.changeViewMode}
            isButtonOnOff={isButtonOnOff}
          />
        </HeaderLine>
      </div>
    );
  };
}
