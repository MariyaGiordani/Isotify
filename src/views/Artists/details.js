import React from 'react';
import { Link } from 'react-router-dom';

const ArtistDetails = (props) => (
  <div>
    <h1>Artist {props.match.params.artistId}</h1>
    <Link to="/artists">Back to Artists</Link>
  </div>
);

export default ArtistDetails;