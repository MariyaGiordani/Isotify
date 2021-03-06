import React, { Component } from 'react';

import HeaderLine from '../headerLine/headerLine';
import CheckBox from '../CheckBox/checkBox';

import { updateAppClasses } from '../../utils/theming';

import './appearance.css';

export default class InterfaceTheme extends Component {
  constructor(props) {
    super(props);

    const storageSubtitle = localStorage.getItem('status');
    const isDark = storageSubtitle === 'DARK';

    this.state = {
      subtitle: isDark ? 'DARK' : 'LIGHT',
      isChecked: isDark
    };
  }

  changeViewTheme = (event) => {
    const checked = event.target.checked;
    const status = checked ? 'DARK' : 'LIGHT';

    this.setState({
      isChecked: checked,
      subtitle: status
    });

    localStorage.setItem('status', status);
    updateAppClasses();
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
            onChange: this.changeViewTheme,
            isChecked: isChecked
          }}
        />
      </HeaderLine>
    );
  };
}
