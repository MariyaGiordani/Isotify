import React from "react";
import { Link } from "react-router-dom";
import "./albums.css";

const AlbumsList = () => (
  <div>
    <h1>ALBUMS</h1>
    <Link to="/artists">Artists</Link>
    <Link to="/albums/grid">Grid View</Link>
  </div>
);

export default AlbumsList;
