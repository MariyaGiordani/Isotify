import React, { Component } from 'react';

import HeaderLine from '../headerLine/headerLine';
import ResetButton from '../ResetButton/resetButton';

import { updateAppClasses } from '../../utils/theming';

import MainFonts from './mainFonts';
import InterfaceTheme from './interfaceTheme';
import './appearance.css';

export default class Appearance extends Component {
  state = {
    font: 'modern',
    theme: 'LIGHT'
  };

  changeViewThemeFont = () => {
    const font = 'modern';
    const theme = 'LIGHT';
    localStorage.setItem('status', theme);
    localStorage.setItem('Font', font);
    this.setState({ font, theme });
    updateAppClasses();
  };

  changeViewTheme = () => {
    const { theme } = this.state;

    const status = theme === 'LIGHT' ? 'DARK' : 'LIGHT';

    this.setState({
      theme: status
    });
    localStorage.setItem('status', status);
    updateAppClasses();
  };

  changeMainFont = (name) => {
    this.setState({ font: name }, () => {
      localStorage.setItem('Font', name);
      updateAppClasses();
    });
  };

  render = () => {
    const { theme, font } = this.state;
    return (
      <div className="appearance">
        <HeaderLine size="big" title="Appearance">
          <ResetButton onClick={this.changeViewThemeFont} />
        </HeaderLine>
        <InterfaceTheme changeViewTheme={this.changeViewTheme} theme={theme} />
        <div className="appearance__divider" />
        <MainFonts changeMainFont={this.changeMainFont} font={font} />
      </div>
    );
  };
}
