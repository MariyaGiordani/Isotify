import React, { Component } from 'react';
import './appearance.css';
import HeaderLine from '../headerLine/headerLine';
import CheckBox from '../CheckBox/checkBox';

export default class InterfaceTheme extends Component {
  constructor(props) {
    super(props);

    const storageSubtitle = localStorage.getItem('status');
    const isChecked = storageSubtitle === 'DARK';

    this.state = {
      subtitle: isChecked ? 'DARK' : 'LIGHT',
      isChecked: isChecked
    };
  }

  changeViewMode = (event) => {
    const checked = event.target.checked;
    const status = checked ? 'DARK' : 'LIGHT';

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
          title: 'Interface theme',
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
