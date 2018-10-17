import React from 'react';
import { Link } from 'react-router-dom';

const ArtistsList = () => (
  <div>
    <h1>ARTISTS</h1>
    <Link to={`/artists/1`}>Artist 1</Link>
    <br />
    <Link to="/albums">Albums</Link>
  </div>

);

export default ArtistsList;