import React from 'react';
import { Link } from 'react-router-dom';

const AlbumsList = () => (
  <div>
    <h1>ALBUMS</h1>
    <Link to="/artists">Artists</Link>
  </div>
);

export default AlbumsList;