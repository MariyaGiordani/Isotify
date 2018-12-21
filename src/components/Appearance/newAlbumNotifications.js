import React, { Component } from 'react';
import './appearance.css';
import HeaderLine from '../headerLine/headerLine';
import CheckBox from '../../components/CheckBox/checkBox';

export default class NewAlbumNotifications extends Component {
  constructor(props) {
    super(props);

    const storageSubtitle = localStorage.getItem('status');
    const isChecked = storageSubtitle === 'ENABLED';

    this.state = {
      subtitle: isChecked ? 'ENABLED' : 'DISABLED',
      isChecked: isChecked
    };
  }

  changeViewMode = (event) => {
    const checked = event.target.checked;
    const status = checked ? 'ENABLED' : 'DISABLED';

    this.setState({
      isChecked: checked,
      subtitle: status
    });

    localStorage.setItem('status', status);
  };

  render = () => {
    const { isChecked, subtitle } = this.state;

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
            onChange: this.changeViewMode,
            isChecked: isChecked
          }}
        />
      </HeaderLine>
    );
  };
}
