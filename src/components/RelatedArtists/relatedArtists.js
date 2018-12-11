import React from 'react';
import { Link } from 'react-router-dom';

import RelatedArtistsIcon from '../RelatedArtistsIcon/relatedArtistsIcon';
import RelatedArtistsMore from '../RelatedArtistsMore/relatedArtistsMore';

import './relatedArtists.css';
const RelatedArtists = ({ artists }) => {
  const artistsIds = artists.map((artist) => artist.id);

  const listIcons = () => {
    return artists
      .slice(0, 4)
      .map(({ id, imgSrc, name }) => (
        <RelatedArtistsIcon key={id} src={imgSrc} id={id} artistName={name} />
      ));
  };
  return (
    <div className="related-artists">
      <div className="related-artists__line" />
      <p className="related-artists__text">RELATED ARTISTS</p>
      <div className="related-artists__wrap">
        {listIcons()}
        {artists.length >= 4 && (
          <Link to={`/artists/related/${artistsIds}`}>
            <RelatedArtistsMore />
          </Link>
        )}
      </div>
    </div>
  );
};

export default RelatedArtists;
