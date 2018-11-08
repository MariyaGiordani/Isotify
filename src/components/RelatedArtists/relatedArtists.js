import React from 'react';
import { Link } from 'react-router-dom';

import RelatedArtistsIcon from '../RelatedArtistsIcon/relatedArtistsIcon';
import RelatedArtistsMore from '../RelatedArtistsMore/relatedArtistsMore';

import './relatedArtists.css';
const RelatedArtists = (props) => {
  const artistsIds = props.artists.map((artist) => artist.id);

  const listIcons = () => {
    return props.artists
      .slice(0, 4)
      .map((artist) => <RelatedArtistsIcon key={artist.id} src={artist.imgSrc} id={artist.id} />);
  };

  return (
    <div className="related-artists">
      <div className="related-artists__line" />
      <p className="related-artists__text">RELATED ARTISTS</p>
      <div className="related-artists__wrap">
        {listIcons()}
        {props.artists.length >= 4 && (
          <Link to={`/artists/related/${artistsIds}`}>
            <RelatedArtistsMore />
          </Link>
        )}
      </div>
    </div>
  );
};

export default RelatedArtists;
