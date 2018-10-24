import React from 'react';
import './relatedArtists.css';
import RelatedArtistsIcon from '../../components/RelatedArtistsIcon/relatedArtestsIcon';
import RelatedArtistsMore from '../RelatedArtistsMore/relatedArtistsMore';
import { LINKS } from './constants';
import { Link } from 'react-router-dom';

const RelatedArtists = () => {
  const listIcons = () => {
    return LINKS.map((link, index) => (
      <RelatedArtistsIcon key={index} src={link.src} />
    ));
  };

  return (
    <div className="related-artists">
      <div className="related-artists__line" />
      <p className="related-artists__text">RELATED ARTISTS</p>
      <div className="related-artists__wrap">
        {listIcons()}
        {LINKS.length >= 4 && (
          <Link to="">
            <RelatedArtistsMore />
          </Link>
        )}
      </div>
    </div>
  );
};

export default RelatedArtists;
