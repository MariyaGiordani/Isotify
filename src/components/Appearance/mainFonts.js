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
    const popUpCollapsed = getClassName('popup-fonts', 'collapsed');
    const popUpShow = getClassName('popup-fonts', 'show');
    return (
      popUp && (
        <div className="popup">
          <div className={`popup-fonts ${popUp ? popUpShow : popUpCollapsed}`}>
            <p
              onClick={this.changeMainFont.bind(this, 'classic')}
              className="popup-fonts__text"
            >
              Classic
            </p>

            <p
              onClick={this.changeMainFont.bind(this, 'modern')}
              className="popup-fonts__text"
            >
              Modern
            </p>
            <p
              onClick={this.changeMainFont.bind(this, 'typewriter')}
              className="popup-fonts__text"
            >
              Typewriter
            </p>
            <p
              onClick={this.changeMainFont.bind(this, 'strong')}
              className="popup-fonts__text"
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
      'popup-fonts__screen',
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
          className={`popup-fonts__screen ${!popUp && popUpScreenCollapsed}`}
        />
      </div>
    );
  };
}
