import React, { Component } from 'react';

import HeaderLine from '../headerLine/headerLine';

import Reset from '../../components/Reset/reset';

import MainFonts from './mainFonts';
import InterfaceTheme from './interfaceTheme';
import './appearance.css';

export default class Appearance extends Component {
  render = () => {
    return (
      <div className="appearance">
        <HeaderLine size="big" title={'Appearance'}>
          <Reset />
        </HeaderLine>
        <InterfaceTheme />
        <div className="appearance__divider" />
        <MainFonts />
      </div>
    );
  };
}
