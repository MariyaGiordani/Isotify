import React, { Component } from 'react';

import HeaderLine from '../headerLine/headerLine';

import getClassName from '../../utils/getClassName';

import './appearance.css';

export default class MainFonts extends Component {
  state = {
    popUp: false,
    font: 'Classic'
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
              onClick={this.changeMainFont.bind(this, 'Classic')}
              className="popup-fonts__text"
            >
              Classic
            </p>

            <p
              onClick={this.changeMainFont.bind(this, 'Modern')}
              className="popup-fonts__text"
            >
              Modern
            </p>
            <p
              onClick={this.changeMainFont.bind(this, 'Typewriter')}
              className="popup-fonts__text"
            >
              Typewriter
            </p>
            <p
              onClick={this.changeMainFont.bind(this, 'Strong')}
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
    const { popUp } = this.state;
    const font = localStorage.getItem('Font')
      ? localStorage.getItem('Font')
      : 'Classic';

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
