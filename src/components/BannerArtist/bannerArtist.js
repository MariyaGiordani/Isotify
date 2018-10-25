import React from 'react';
import './bannerArtist.css';
import ButtonFollow from '../buttons/ButtonFollow/buttonFollow';
import ButtonPlaylist from '../buttons/ButtonPlaylist/buttonPlaylist';

const BannerArtist = () => (
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

export default BannerArtist;
