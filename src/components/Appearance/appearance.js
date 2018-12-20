import React, { Component } from 'react';
import './appearance.css';
import HeaderLine from '../headerLine/headerLine';
import Reset from '../../components/Reset/reset';
import PushNotifications from './pushNotifications';
import NightMode from './nightMode';
import NewAlbumNotifications from './newAlbumNotifications';
import MainFonts from './mainFonts';

export default class Appearence extends Component {
  render = () => {
    return (
      <div className="appearance">
        <HeaderLine size="big" title={'Appearence'}>
          <Reset />
        </HeaderLine>
        <HeaderLine
          {...{
            title: 'Interface theme',
            subtitle: 'LIGHT',
            size: 'small'
          }}
        />
        <div className="appearance__divider" />
        <PushNotifications />
        <div className="appearance__divider" />
        <NightMode />
        <div className="appearance__divider" />
        <MainFonts />
        <div className="appearance__divider" />
        <NewAlbumNotifications />
      </div>
    );
  };
}
