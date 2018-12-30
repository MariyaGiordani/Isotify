import React from 'react';

import './bannerArtist.css';

import ButtonFollow from '../ButtonFollow/buttonFollow';
import ButtonPlaylist from '../ButtonPlaylist/buttonPlaylist';
import RelatedArtists from '../../components/RelatedArtists/relatedArtists';

const BannerArtist = ({
  name,
  imgSrc,
  songsAmount,
  albumsAmount,
  relatedArtists,
  id
}) => {
  return (
    <div className="banner-artist">
      <img className="banner-artist__image" alt={name} src={imgSrc} />
      <div className="banner-artist__container">
        <h1 className="banner-artist__title">{name}</h1>
        <p className="banner-artist__information">
          {albumsAmount} Albums, {songsAmount} Songs
        </p>
        <div className="banner-artist__buttons-wrapper">
          <ButtonFollow {...{ id }} />
          <ButtonPlaylist />
          <RelatedArtists artists={relatedArtists || []} />
        </div>
      </div>
    </div>
  );
};

export default BannerArtist;
