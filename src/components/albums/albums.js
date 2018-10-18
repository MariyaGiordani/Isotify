import React from "react";
import Album from "../album/album";
import "./albums.css";

const Albums = ({ albums, style }) => (
  <div className="albums-container">
    {albums &&
      albums.map((album) => <Album title={album.title} author={album.author} size={style} imgSrc={album.imgSrc} />)}
  </div>
);

export default Albums;
