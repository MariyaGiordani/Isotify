import React from "react";
import Album from "../album/album";
import "./albums.css";

const Albums = ({ albums, size }) => (
  <div className="albums-container">
    {albums &&
      albums.map((album) => <Album title={album.title} author={album.author} size={size} imgSrc={album.imgSrc} />)}
  </div>
);

export default Albums;
