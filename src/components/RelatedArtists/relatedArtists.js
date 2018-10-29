import React from 'react';
import { Link } from 'react-router-dom';

import RelatedArtistsIcon from '../../components/RelatedArtistsIcon/relatedArtestsIcon';
import RelatedArtistsMore from '../RelatedArtistsMore/relatedArtistsMore';

import './relatedArtists.css';
import { mock } from './mock';

const RelatedArtists = () => {
  const listIcons = () => {
    return mock.map((link, index) => (
      <RelatedArtistsIcon key={index} src={link.src} />
    ));
  };

  return (
    <div className="related-artists">
      <div className="related-artists__line" />
      <p className="related-artists__text">RELATED ARTISTS</p>
      <div className="related-artists__wrap">
        {listIcons()}
        {mock.length >= 4 && (
          <Link to="">
            <RelatedArtistsMore />
          </Link>
        )}
      </div>
    </div>
  );
};

export default RelatedArtists;
