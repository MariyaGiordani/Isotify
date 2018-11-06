import React from 'react';
import { Link } from 'react-router-dom';
import './relatedArtistsIcon.css';

const RelatedArtistsIcon = ({ src, id }) => {
  return (
    <Link to={`/artists/${id}`} className="related-artists-icons">
      <img
        className="related-artists-icons__image"
        alt="Related artis"
        src={src}
      />
    </Link>
  );
};

export default RelatedArtistsIcon;
