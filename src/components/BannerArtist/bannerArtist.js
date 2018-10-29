import React from 'react';
import { Redirect } from 'react-router-dom';
import './bannerArtist.css';
import ButtonFollow from '../ButtonFollow/buttonFollow';
import ButtonPlaylist from '../ButtonPlaylist/buttonPlaylist';
const access_token_storage = localStorage.getItem('access_token');
const userId = localStorage.getItem('userId');

const BannerArtist = () => {
  if (access_token_storage && userId) {
    return (
      <div className="banner-artist">
        <div className="banner-artist__container">
          <h1 className="banner-artist__title">Kanye West</h1>
          <p className="banner-artist__information">9 Albums, 231 Songs</p>
          <div className="banner-artist__buttons-wrapper">
            <ButtonFollow />
            <ButtonPlaylist />
          </div>
        </div>
      </div>
    );
  } else {
    return <Redirect to="/login" />;
  }
};

export default BannerArtist;
