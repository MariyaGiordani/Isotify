import React from 'react';
import './relatedArtistsIcon.css';

const RelatedArtistsIcon = ({ src }) => {
  return (
    <div className="related-artists-icons__artist">
      <img className="related-artists-icons__image" alt="" src={src} />
    </div>
  );
};

export default RelatedArtistsIcon;
