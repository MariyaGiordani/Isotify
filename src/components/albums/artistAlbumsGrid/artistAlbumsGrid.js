import React from 'react';
import './artistAlbumsGrid.css';

import { PlayerContext } from '../../../components/Player/musicPlayer';
import AlbumCard from '../../Card/albumCard';

const getAlbumsComponents = (albums = [], size) =>
  albums.map(({ imgSrc, title, date, id, artist }) => (
    <PlayerContext key={id}>
      {(context) => (
        <AlbumCard
          {...{
            imgSrc,
            size,
            title,
            id,
            titleHref: `/artists/${artist.id}`,
            subtitle: date.slice(0, 4),
            key: id,
            hasHover: true,
            hoverCallback: () => context.onClickPlayAlbum(id)
          }}
        />
      )}
    </PlayerContext>
  ));

const ArtistAlbumsGrid = ({ albums, size }) => (
  <div className="artist-albums-grid">{getAlbumsComponents(albums, size)}</div>
);

export default ArtistAlbumsGrid;
