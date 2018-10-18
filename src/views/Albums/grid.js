import React from "react";
import Albums from "../../components/albums/albums";
import HeaderLine from "../../components/headerLine/headerLine";
import Switch from "../../components/buttons/switchButton/switchButton";
import "./albums.css";

const AlbumsGrid = ({ albumsAmount, songsAmount, albumsList }) => {
  const subtitle = `${albumsAmount || 0} Albums, ${songsAmount || 0} Songs`;
  return (
    <div class="albumsView">
      <HeaderLine
        {...{
          title: "Albums",
          subtitle
        }}
      >
        <Switch firstOption="Grid" secondOption="List" />
      </HeaderLine>
      <Albums size="big" albums={albumsList} />
    </div>
  );
};

export default AlbumsGrid;
