import React from 'react';
import { Link } from 'react-router-dom';
import Album from '../../components/album/album';

const AlbumsList = () => (
  <div>
    <h1>ALBUMS</h1>
    <Link to="/artists">Artists</Link>
    <Album/>
  </div>
);

export default AlbumsList;