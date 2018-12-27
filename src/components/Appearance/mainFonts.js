import React, { Component } from 'react';

import HeaderLine from '../headerLine/headerLine';

import getClassName from '../../utils/getClassName';

import './appearance.css';
import { updateAppClasses } from '../../utils/theming';

export default class MainFonts extends Component {
  state = {
    popUp: false,
    font: 'Modern'
  };

  componentDidMount = () => {
    const font = localStorage.getItem('Font')
      ? localStorage.getItem('Font')
      : 'Modern';
    this.setState({ font });
  };

  showPopUp = () => {
    this.setState({ popUp: true });
  };

  closePopUp = () => {
    this.setState({ popUp: false });
  };

  changeMainFont = (name) => {
    this.setState({ font: name }, () => {
      localStorage.setItem('Font', name);
      updateAppClasses();
    });
  };

  popUpMainFonts = () => {
    const { popUp } = this.state;
    const popUpCollapsed = getClassName(
      'main-fonts__popup-container',
      'collapsed'
    );
    const popUpShow = getClassName('main-fonts__popup-container', 'show');
    return (
      popUp && (
        <div className="main-fonts__popup">
          <div
            className={`main-fonts__popup-container ${
              popUp ? popUpShow : popUpCollapsed
            }`}
          >
            <p
              onClick={this.changeMainFont.bind(this, 'classic')}
              className="main-fonts__popup-text "
            >
              Classic
            </p>

            <p
              onClick={this.changeMainFont.bind(this, 'modern')}
              className="main-fonts__popup-text "
            >
              Modern
            </p>
            <p
              onClick={this.changeMainFont.bind(this, 'typewriter')}
              className="main-fonts__popup-text "
            >
              Typewriter
            </p>
            <p
              onClick={this.changeMainFont.bind(this, 'strong')}
              className="main-fonts__popup-text "
            >
              Strong
            </p>
          </div>
        </div>
      )
    );
  };

  render = () => {
    const { popUp, font } = this.state;

    const popUpScreenCollapsed = getClassName(
      'main-fonts__popup-screen',
      'collapsed'
    );
    return (
      <div className="main-fonts">
        <HeaderLine
          {...{
            title: 'Main fonts',
            subtitle: font,
            size: 'small'
          }}
          showPopUp={this.showPopUp}
        />
        {this.popUpMainFonts()}
        <div
          onClick={this.closePopUp}
          className={`main-fonts__popup-screen${!popUp &&
            popUpScreenCollapsed}`}
        />
      </div>
    );
  };
}
