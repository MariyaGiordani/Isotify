import React from 'react';
import Card from '../../Card/card';
import './artistAlbumsGrid.css';

import { PlayerContext } from '../../../components/Player/musicPlayer';

const getAlbumsComponents = (albums = [], size) =>
  albums.map(({ imgSrc, title, date, id, artist }) => (
    <PlayerContext key={id}>
      {(context) => (
        <Card
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
