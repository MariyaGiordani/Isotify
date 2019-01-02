import React, { Component, Fragment } from 'react';

import './header.css';

import triangleImg from '../../assets/img/triangle.png';
import playlisticonImg from '../../assets/img/playlisticon.png';
import mountainImg from '../../assets/img/mountain.png';
import logOutImg from '../../assets/img/logout.svg';

import Search from '../../components/Search/search';
import { getUserInfo } from '../../services/user';

import { userInfo as parseUserInfo } from '../../utils/spotifyResponseParsers';
import { logOut } from '../../utils/logOut';

export default class Header extends Component {
  state = {
    name: '',
    profilePicture: '',
    shouldShow: false
  };

  componentDidMount = () => {
    getUserInfo().then((response) => {
      const userInfo = parseUserInfo(response);
      this.setState({
        ...userInfo
      });
    });
  };

  render = () => {
    const { profilePicture, name, shouldShow } = this.state;

    return (
      <div className="header">
        <div className="header__icon">
          {profilePicture && (
            <img
              className="header__icon-image"
              alt="User Profile"
              src={profilePicture}
            />
          )}
        </div>
        <div className="header__wrap">
          <p className="header__user-name">{name}</p>
          <a className="header__user-profile" href="#viewprofile">
            VIEW PROFILE
          </a>
        </div>
        <img className="header__image-triangle" alt="" src={triangleImg} />
        <div className="header__divider" />
        <Search />
        <div className="header__icon-right">
          {shouldShow ? (
            <Fragment>
              <img
                className="header__image-playlist"
                alt="Playlist"
                src={playlisticonImg}
              />
              <div className="header__divider" />
              <img
                className="header__image-mountain"
                alt="Mountain"
                src={mountainImg}
              />
            </Fragment>
          ) : (
            <img
              className="header__image-logout"
              alt="LogOut"
              src={logOutImg}
              onClick={logOut}
            />
          )}
        </div>
      </div>
    );
  };
}
