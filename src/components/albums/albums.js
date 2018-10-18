import React from "react";
import Album from "../album/album";
import "./albums.css";

const getAlbumsComponents = (albums, size) => {
  albums &&
    albums.map((album) => (
      <Album
        title={album.title}
        author={album.author}
        size={size}
        imgSrc={album.imgSrc}
      />
    ));
};

const Albums = ({ albums, size }) => (
  <div className="albums-container">{getAlbumsComponents(albums, size)}</div>
);

export default Albums;
