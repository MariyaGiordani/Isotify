import React from 'react';
import './relatedArtists.css';
import Line from '../../components/Line/line';
import RelatedArtistsIcons from '../../components/RelatedartistsIcons/relatedArtestsIcons';

const RelatedArtists = () => (
  <div className="related-artists">
    <Line />
    <p className="related-artists__text">RELATED ARTISTS</p>
    <RelatedArtistsIcons />
  </div>
);

export default RelatedArtists;
