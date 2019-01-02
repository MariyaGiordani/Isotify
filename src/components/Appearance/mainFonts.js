import React, { Component } from 'react';

import HeaderLine from '../headerLine/headerLine';

import getClassName from '../../utils/getClassName';

import './appearance.css';

export default class MainFonts extends Component {
  state = {
    popup: false
  };

  showPopUp = () => {
    this.setState({ popup: true });
  };

  closePopUp = () => {
    this.setState({ popup: false });
  };

  popupMainFonts = () => {
    const { popup } = this.state;
    const popupCollapsed = getClassName(
      'main-fonts__popup-container',
      'collapsed'
    );
    const popupShow = getClassName('main-fonts__popup-container', 'show');
    const { changeMainFont } = this.props;
    return (
      popup && (
        <div className="main-fonts__popup">
          <div
            className={`main-fonts__popup-container ${
              popup ? popupShow : popupCollapsed
            }`}
          >
            <p
              onClick={() => {
                changeMainFont('classic');
              }}
              className="main-fonts__popup-text "
            >
              Classic
            </p>

            <p
              onClick={() => {
                changeMainFont('modern');
              }}
              className="main-fonts__popup-text "
            >
              Modern
            </p>
            <p
              onClick={() => {
                changeMainFont('typewriter');
              }}
              className="main-fonts__popup-text "
            >
              Typewriter
            </p>
            <p
              onClick={() => {
                changeMainFont('strong');
              }}
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
    const { font } = this.props;
    const { popup } = this.state;

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
          className={`main-fonts__popup-screen ${!popup &&
            popupScreenCollapsed}`}
        />
      </div>
    );
  };
}
