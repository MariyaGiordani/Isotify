import React, { Component } from 'react';
import './appearance.css';
import HeaderLine from '../headerLine/headerLine';
import getClassName from '../../utils/getClassName';

export default class MainFonts extends Component {
  state = {
    popUp: false
  };

  showPopUp = () => {
    this.setState({ popUp: true });
  };

  closePopUp = () => {
    this.setState({ popUp: false });
  };

  popUpMainFonts = () => {
    const { popUp } = this.state;
    const popUpCollapsed = getClassName('popup-fonts', 'collapsed');
    const popUpShow = getClassName('popup-fonts', 'show');
    return (
      popUp && (
        <div className="popup">
          <div className={`popup-fonts ${popUp ? popUpShow : popUpCollapsed}`}>
            <div className="popup-fonts__text"> Classic </div>
            <div className="popup-fonts__text"> Modern </div>
            <div className="popup-fonts__text"> Typewriter </div>
            <div className="popup-fonts__text"> Strong </div>
          </div>
        </div>
      )
    );
  };

  render = () => {
    const { popUp } = this.state;
    const popUpScreenCollapsed = getClassName(
      'popup-fonts__screen',
      'collapsed'
    );
    return (
      <div>
        <HeaderLine
          {...{
            title: 'Main fonts',
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
