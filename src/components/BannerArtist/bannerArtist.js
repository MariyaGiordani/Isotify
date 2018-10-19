import React from "react";
import "./bannerArtist.css";
import ButtonFollow from "../Buttons/ButtonFollow/buttonFollow";
import ButtonPlaylist from "../Buttons/ButtonPlaylist/buttonPlaylist";

const BannerArtist = () => (
  <div className="banner-artist">
    <div className="banner-artist__container">
      <h1 className="banner-artist__title">Kenye West</h1>
      <p className="banner-artist__information">9 Albums, 231 Songs</p>
      <ButtonFollow />
      <ButtonPlaylist />
    </div>
  </div>
);

export default BannerArtist;
