import React from 'react';

import './bannerArtist.css';

import ButtonFollow from '../ButtonFollow/buttonFollow';
import ButtonPlaylist from '../ButtonPlaylist/buttonPlaylist';

import RelatedArtists from '../../components/RelatedArtists/relatedArtists';

const BannerArtist = (props) => (
  <div className="banner-artist">
    <div className="banner-artist__container">
      <h1 className="banner-artist__title">{props.name}</h1>
      <p className="banner-artist__information">{`${
        props.albumsAmount
      } Albums, ${props.songsAmount} Songs`}</p>
      <div className="banner-artist__buttons-wrapper">
        <ButtonFollow />
        <ButtonPlaylist />
        <RelatedArtists />
      </div>
    </div>
  </div>
);

export default BannerArtist;
