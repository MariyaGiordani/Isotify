import React from 'react';
import { Link } from 'react-router-dom';
import SideBar from '../../components/Sidebar/sidebar';
import './albums.css';

const AlbumsList = () => (
  <div>
    <SideBar />
    <div className="container">
      <h1>ALBUMS</h1>
      <Link to="/artists">Artists</Link>
      <Link to="/albums/grid">Grid View</Link>
    </div>
  </div>
);

export default AlbumsList;
