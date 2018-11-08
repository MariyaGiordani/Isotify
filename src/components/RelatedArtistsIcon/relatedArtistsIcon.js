import React from 'react';
import { Link } from 'react-router-dom';
import './relatedArtistsIcon.css';

const RelatedArtistsIcon = ({ src, id, artistName }) => {
  return (
    <Link to={`/artists/${id}`} className="related-artists-icon">
      <img className="related-artists-icon__image" alt={`Related: ${artistName}`} src={src} />
    </Link>
  );
};

export default RelatedArtistsIcon;
