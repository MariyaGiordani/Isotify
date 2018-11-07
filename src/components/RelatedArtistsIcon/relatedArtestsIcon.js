import React from 'react';
import './relatedArtistsIcon.css';

const RelatedArtistsIcon = ({ src }) => {
  return (
    <div className="related-artists-icons">
      <img
        className="related-artists-icons__image"
        alt="Related artists"
        src={src}
      />
    </div>
  );
};

export default RelatedArtistsIcon;
