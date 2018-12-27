import React, { Component } from 'react';

import HeaderLine from '../headerLine/headerLine';

import getClassName from '../../utils/getClassName';

import './appearance.css';
import { updateAppClasses } from '../../utils/theming';

export default class MainFonts extends Component {
  state = {
    popup: false,
    font: 'Modern'
  };

  componentDidMount = () => {
    const font = localStorage.getItem('Font')
      ? localStorage.getItem('Font')
      : 'Modern';
    this.setState({ font });
  };

  showPopUp = () => {
    this.setState({ popup: true });
  };

  closePopUp = () => {
    this.setState({ popup: false });
  };

  changeMainFont = (name) => {
    this.setState({ font: name }, () => {
      localStorage.setItem('Font', name);
      updateAppClasses();
    });
  };

  popupMainFonts = () => {
    const { popup } = this.state;
    const popupCollapsed = getClassName(
      'main-fonts__popup-container',
      'collapsed'
    );
    const popupShow = getClassName('main-fonts__popup-container', 'show');
    return (
      popup && (
        <div className="main-fonts__popup">
          <div
            className={`main-fonts__popup-container ${
              popup ? popupShow : popupCollapsed
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
    const { popup, font } = this.state;

    const popupScreenCollapsed = getClassName(
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
        {this.popupMainFonts()}
        <div
          onClick={this.closePopUp}
          className={`main-fonts__popup-screen${!popup &&
            popupScreenCollapsed}`}
        />
      </div>
    );
  };
}
