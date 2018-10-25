import React from 'react';
import { Link } from 'react-router-dom';
import SideBar from '../../components/Sidebar/sidebar';

const ArtistsList = () => {
  console.log('here artists lists');
  return (
    <div>
      <SideBar />
      <div className="container">
        <Link to="/artists/1">Artists</Link>
      </div>
    </div>
  );
};

export default ArtistsList;
