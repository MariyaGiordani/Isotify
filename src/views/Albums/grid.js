import React from "react";
import Albums from "../../components/albums/albums";
import HeaderLine from "../../components/headerLine/headerLine";
import Switch from "../../components/buttons/switchButton/switchButton";
import "./albums.css";

const createHeaderSubtitle = (albumsAmount, songsAmount) => {
  return `${albumsAmount || 0} Albums, ${songsAmount || 0} Songs`;
};

const AlbumsGrid = ({ albumsAmount, songsAmount, albumsList }) => (
  <div class="albumsView">
    <HeaderLine title="Albums" subtitle={createHeaderSubtitle(albumsAmount, songsAmount)}>
      <Switch firstOption="Grid" secondOption="List" />
    </HeaderLine>
    <Albums style="big" albums={albumsList} />
  </div>
);

export default AlbumsGrid;
