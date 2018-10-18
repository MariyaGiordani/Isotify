import React from "react";
import Album from "../album/album";
import "./albums.css";

const Albums = (props) => (
  <div className="albums-container">
    {props.albums &&
      props.albums.map((album) => (
        <Album title={album.title} author={album.author} size={props.style} imgSrc={album.imgSrc} />
      ))}
  </div>
);

export default Albums;
