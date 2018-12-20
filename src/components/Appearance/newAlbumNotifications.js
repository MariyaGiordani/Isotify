import React, { Component } from 'react';
import './appearance.css';
import HeaderLine from '../headerLine/headerLine';
import CheckBox from '../../components/CheckBox/checkBox';

export default class NewAlbumNotifications extends Component {
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
          title: 'New album notification',
          subtitle: subtitle,
          size: 'small'
        }}
      >
        <CheckBox
          {...{
            inputFunction: this.changeViewMode,
            isButtonOnOff: false
          }}
        />
      </HeaderLine>
    );
  };
}
